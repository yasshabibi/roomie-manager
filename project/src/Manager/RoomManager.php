<?php

namespace App\Manager;

use App\Entity\User;
use App\Factory\PDOFactory;
use App\Interfaces\Database;

class RoomManager extends BaseManager
{

    /**
     * @return Room[]
     */
    public function getAllRooms(): array
    {
        $query = $this->pdo->query("select * from Room");

        $rooms = [];

        while ($data = $query->fetch(\PDO::FETCH_ASSOC)) {
            $rooms[] = new User($data);
        }

        return $rooms;
    }
}
