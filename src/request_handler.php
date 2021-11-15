<?php
header("Content-Type: text/json; charset=UTF-8");

$action = $_GET['action'];

function checkCookies(): bool
{
    return isset($_COOKIE['client-token']) && isset($_COOKIE['server-token']);
}

function badCookies(): void
{
    http_response_code(400);
    echo '"Please register!"';
}

class TokenGenerator
{
    public static function get_serverToken()
    {
        return random_int(1000000000000000,9999999999999999);
    }

    public static function get_userToken()
    {
        return random_int(1000000000000000,9999999999999999);
    }
}

switch ($action) {
    case 'register':
        break;
    case 'get-userdata':
        break;
    case 'set-email':
        break;
    case 'respond':
        break;
    default:
        http_response_code(400);
        echo '"Bad Query!"';
        break;
}

if (random_int(0, 1)) {
    sleep(1);
}
?>