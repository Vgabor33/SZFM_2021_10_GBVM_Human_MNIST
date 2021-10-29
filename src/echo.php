<?php
// Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
    // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
    // you want to allow, and if so:
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header("Access-Control-Allow-Headers: Cookie");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        // may also be using PUT, PATCH, HEAD etc
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}
header("Content-Type: text/json; charset=UTF-8");

$json = file_get_contents('php://input');

echo "{";
echo "\"POST data\": \n";
echo $json;//json_encode($_POST);
//foreach ($_POST as $key => $value) {
//    echo $key . " = " . $value . "\n";
//}
echo ",\"QUERY data\": \n";
echo json_encode($_GET);
//foreach ($_GET as $key => $value) {
//    echo $key . " = " . $value . "\n";
//}
echo ",\"cookies\": \n";
echo json_encode($_COOKIE);
//foreach ($_COOKIE as $key => $value) {
//    echo $key . " = " . $value . "\n";
//}
echo "}";
