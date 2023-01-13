<?php

namespace App\Manager;

use App\Entity\User;
use App\Factory\PDOFactory;
use App\Interfaces\Database;

class SpentManager extends BaseManager
{

    /**
     * @return Spent[]
     */
    public function getAllTransaction(): array
    {
        $query = $this->pdo->query("select * from Spent");

        $spent = [];

        while ($data = $query->fetch(\PDO::FETCH_ASSOC)) {
            $spent[] = new User($data);
        }

        return $spent;
    }
}
