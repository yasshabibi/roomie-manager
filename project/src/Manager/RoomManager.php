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

    public function getRoomCapacity($id): int 
    {
        $query = $this->pdo->query("select capacity from Room where id = $id");

        $data = $query->fetch(\PDO::FETCH_ASSOC);
        $room = $data;

        return $room;
    }

    public function getName($id): string
    {
        $query = $this->pdo->query("select name from User where id = $id");

        $data = $query->fetch(\PDO::FETCH_ASSOC);
        $name = $data;

        return $name;
    }

    public function getCreatedAt($id): string
    {
        $query = $this->pdo->query("select created_at from User where id = $id");

        $data = $query->fetch(\PDO::FETCH_ASSOC);
        $created_at = $data;

        return $created_at;
    }
}
