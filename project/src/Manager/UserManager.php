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

    public function getLastname($id): string
    {
        $query = $this->pdo->query("select lastname from User where id = $id");

        $data = $query->fetch(\PDO::FETCH_ASSOC);
        $lastname = $data;

        return $lastname;
    }

    public function getFirstname($id): string
    {
        $query = $this->pdo->query("select firstname from User where id = $id");

        $data = $query->fetch(\PDO::FETCH_ASSOC);
        $firstname = $data;

        return $firstname;
    }

    public function getEmail($id): string
    {
        $query = $this->pdo->query("select email from User where id = $id");

        $data = $query->fetch(\PDO::FETCH_ASSOC);
        $email = $data;

        return $email;
    }

    public function getRank($id): int
    {
        $query = $this->pdo->query("select rank from User where id = $id");

        $data = $query->fetch(\PDO::FETCH_ASSOC);
        $rank = $data;

        return $rank;
    }

    public function getCreatedAt($id): string
    {
        $query = $this->pdo->query("select created_at from User where id = $id");

        $data = $query->fetch(\PDO::FETCH_ASSOC);
        $created_at = $data;

        return $created_at;
    }
}