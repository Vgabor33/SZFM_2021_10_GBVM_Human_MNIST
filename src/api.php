<?php

function checkCookies(): bool
{
    return isset($_COOKIE['client-token']) && isset($_COOKIE['server-token']);
}

function badCookies(): void
{
    http_response_code(400);
    echo '"Please register!"';
}


header("Content-Type: text/json; charset=UTF-8");

$action = $_GET['action'];
$dataFilename = "../../user-data.txt";

$f = fopen($dataFilename, 'a');
fclose($f);

switch ($action) {
    case 'register':
        $data = json_decode(file_get_contents('php://input'), true);
        if (
            isset($data['age'])
            && isset($data['region'])
            && isset($data['education'])
            && $data['age'] != 0
            && $data['region'] != 0
            && $data['education'] != 0
            && isset($_COOKIE['client-token'])
        ) {
            $data['streak'] = 0;
            file_put_contents($dataFilename, json_encode($data));
            echo $_COOKIE['client-token'];
        } else {
            http_response_code(400);
            echo '"Invalid User Data!"';
        }
        break;
    case 'get-userdata':
        if (checkCookies()) {
            if (file_exists($dataFilename)) {
                echo file_get_contents($dataFilename);
            } else {
                echo '{
                    "age": 1,
                    "region": 1,
                    "education": 1,
                    "streak": 1,
                    "email": "a@b.com"
                }';
            }
        } else {
            badCookies();
        }
        break;
    case 'set-email':
        if (checkCookies()) {
            $data = json_decode(file_get_contents('php://input'), true);
            if (isset($data['email']) && filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
                $data2 = json_decode(file_get_contents($dataFilename), true);
                $data2['email'] = $data['email'];
                file_put_contents($dataFilename, json_encode($data2));
            } else {
                http_response_code(400);
                echo '"Invalid Email!"';
            }
        } else {
            badCookies();
        }
        break;
    case 'respond':
        if (checkCookies()) {
            $data = json_decode(file_get_contents('php://input'), true);
            $data2 = json_decode(file_get_contents($dataFilename), true);
            $urls = [
                "img/0_37917.jpg",
                "img/0_63.jpg",
                "img/2_36978.jpg",
                "img/3_23337.jpg",
                "img/5_45567.jpg",
                "img/7_8566.jpg",
                "img/8_44221.jpg",
                "img/9_59899.jpg"
            ];
            echo json_encode(array(
                'test-token' => ($data['test-token'] ?? 0) + 1,
                'streak' => ($data2['streak'] ?? 0) + 1,
                'test' => $urls[random_int(0, count($urls)-1)]
            ));
            $data2['streak']++;
            file_put_contents($dataFilename, json_encode($data2));
            return; // hack to not get the artificial api delay
        } else {
            badCookies();
        }
        break;
    default:
        http_response_code(400);
        echo '"Bad Query!"';
        break;
}

if (random_int(0, 1)) {
    sleep(1);
}
