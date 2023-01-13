<?php

namespace App\Entity;

class UserInRoom extends BaseEntity{
    private int $id;
    private int $userID;
    private int $roomID;

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @param int $id
     * @return UserInRoom
     */
    public function setId(int $id): UserInRoom
    {
        $this->id = $id;
        return $this;
    }

    /**
     * @return int
     */
    public function getUserID(): int
    {
        return $this->userID;
    }

    /**
     * @param int $userID
     * @return UserInRoom
     */
    public function setUserID(int $userID): UserInRoom
    {
        $this->userID = $userID;
        return $this;
    }

    /**
     * @return int
     */
    public function getRoomID(): int
    {
        return $this->roomID;
    }

    /**
     * @param int $roomID
     * @return UserInRoom
     */
    public function setRoomID(int $roomID): UserInRoom
    {
        $this->roomID = $roomID;
        return $this;
    }

}