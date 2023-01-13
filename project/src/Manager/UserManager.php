<?php

namespace App\Manager;

use App\Entity\User;
use App\Factory\PDOFactory;
use App\Interfaces\Database;

class UserManager extends BaseManager
{

    /**
     * @return User[]
     */
    public function getAllUsers(): array
    {
        $query = $this->pdo->query("select * from User");

        $users = [];

        while ($data = $query->fetch(\PDO::FETCH_ASSOC)) {
            $users[] = new User($data);
        }

        return $users;
    }

    public function getUser($id): array 
    {
        $query = $this->pdo->query("select * from User where id = $id");

        $data = $query->fetch(\PDO::FETCH_ASSOC);
        $user = $data;

        return $user;
    }

    public function getPassword($id): string
    {
        $query = $this->pdo->query("select password from User where id = $id");

        $data = $query->fetch(\PDO::FETCH_ASSOC);
        $password = $data;

        return $password;
    }
}