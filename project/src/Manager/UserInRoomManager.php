<?php

namespace App\Manager;

use App\Entity\UserInRoom;
use App\Factory\PDOFactory;
use App\Interfaces\Database;

class RoomManager extends BaseManager
{
    
    /**
     * @return UserInRoom[]
     */
    public function getRoomUser($id): array
    {
        $query = $this->pdo->query("select User from Room where id = $id");

        $user_in_room = [];

        while ($data = $query->fetch(\PDO::FETCH_ASSOC)) {
            $user_in_room[] = new UserInRoom($data);
        }

        return $user_in_room;
    }
}