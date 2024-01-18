<?php
class UserController
{
    private $database;

    public function __construct($database)
    {
        $this->database = $database;
    }

    public function getUserByID()
    {
        $statement = "
            SELECT 
                *
            FROM
                users
            WHERE id = ?;
        ";

        try {
            $statement = $this->database->prepare($statement);
            $statement->execute(array(1));
            $result = $statement->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($result);
        } catch (PDOException $e) {
            exit($e->getMessage());
        }
    }
}
