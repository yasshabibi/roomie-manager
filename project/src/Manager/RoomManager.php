<?php

namespace App\Manager;

use App\Entity\Room;
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
            $rooms[] = new Room($data);
        }

        return $rooms;
    }

    public function getRoom($id): array 
    {
        $query = $this->pdo->query("select * from Room where id = $id");

        $room = [];

        $data = $query->fetch(\PDO::FETCH_ASSOC);
        $room[] = new Room($data);

        return $room;
    }
}
