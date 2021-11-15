<?php
header("Content-Type: text/json; charset=UTF-8");

function checkCookies(): bool
{
    return isset($_COOKIE['client-token']) && isset($_COOKIE['server-token']);
}
?>