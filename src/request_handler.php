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


class DBHandler
{
    private $servername;
    private $db_username;
    private $db_password;
    private $dbname;

    private function __construct() 
    {
        $this->servername="localhost";
        $this->db_username="root";
        $this->db_password="root";
        $this->dbname="human_mnist";
    }

    public function get_serverName()
    {
        return $this->servername;
    }

    public function get_userName()
    {
        return $this->db_username;
    }
    public function get_password()
    {
        return $this->db_password;
    }
    public function get_dbName()
    {
        return $this->dbname;
    }

    private static function newConnection()
    {
        $dbconn = new DBHandler();
        $conn = new mysqli($dbconn->get_serverName(), $dbconn->get_userName(), $dbconn->get_password(), $dbconn->get_dbName());
        if ($conn->connect_error) {
            http_response_code(500);
            echo "Error: ". $conn->connect_error;
            die("Connection failed: " . $conn->connect_error);
        }
        return $conn;
    }

    public static function insertUser($data,$serverToken)
    {
        $sql = "INSERT INTO human_mnist.users (`serverToken`, `clientToken`, `region`, `age`, `education`, `streak`)
         VALUES ('".$serverToken."','".$_COOKIE['client-token']."','".$data['region']."','".$data['age']."',
        '".$data['education']."','".$data['streak']."');";
        $conn = DBHandler::newConnection();
        if (!($conn->query($sql)) === TRUE) 
        {
            http_response_code(500);
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
        $conn->close();
    }

    public static function setEmail($serverToken,$clientToken,$email)
    {
        $sql= "UPDATE human_mnist.users SET email = '".$email."' WHERE serverToken = '".$serverToken."' AND clientToken = '".$clientToken."' ";
        $conn = DBHandler::newConnection();
        if (!($conn->query($sql)) === TRUE) 
        {
            http_response_code(500);
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
        $conn->close();
    }

    public static function getUserDatabyToken($serverToken,$clientToken)
    {
        $sql= "SELECT * FROM human_mnist.users WHERE serverToken = '".$serverToken."' AND clientToken = '".$clientToken."' ";
        $conn = DBHandler::newConnection();
        $result = $conn->query($sql);
        if ($result->num_rows > 0) 
        {
            while($row = $result->fetch_assoc()) 
            {
                echo "{
                    "."age".": ".$row['age']." ,
                    "."region".": ".$row['region'].",
                    "."education".": ".$row['education'].",
                    "."streak".": ".$row['streak'].",
                    "."email".": ".$row['email']."
                }";
            }
        } 
        else 
        {
            http_response_code(500);
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
        $conn->close();
    }

}

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
        )
        {
            $data['streak'] = 0;
            $serverToken = TokenGenerator::get_userToken();
            DBHandler::insertUser($data,$serverToken);
            echo $serverToken;
        }
        else 
        {
            http_response_code(400);
            echo '"Invalid User Data!"';
        }
        break;
    case 'get-userdata':
        if (checkCookies()) 
        {
            DBHandler::getUserDatabyToken($_COOKIE['server-token'],$_COOKIE['client-token']);
        } 
        else 
        {
            badCookies();
        }
        break;
    case 'set-email':
        if (checkCookies()) 
        {
            $data = json_decode(file_get_contents('php://input'), true);
            if (isset($data['email']) && filter_var($data['email'], FILTER_VALIDATE_EMAIL)) 
            {
                DBHandler::setEmail($_COOKIE['server-token'],$_COOKIE['client-token'],$data['email']);
                $data2 = json_decode(file_get_contents($dataFilename), true);
                $data2['email'] = $data['email'];
                file_put_contents($dataFilename, json_encode($data2));
            } 
            else 
            {
                http_response_code(400);
                echo '"Invalid Email!"';
            }
        } 
        else 
        {
            badCookies();
        }
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