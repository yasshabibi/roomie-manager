<?php

namespace App\Entity;

class Spent extends BaseEntity{
    private int $id;
    private int $userID;
    private int $roomID;
    private int $moneySpent;
    private string $commentary;
    private string $created_at;

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @param int $id
     * @return Spent
     */
    public function setId(int $id): Spent
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
     * @return Spent
     */
    public function setUserID(int $userID): Spent
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
     * @return Spent
     */
    public function setRoomID(int $roomID): Spent
    {
        $this->roomID = $roomID;
        return $this;
    }

    /**
     * @return int
     */
    public function getMoneySpent(): int
    {
        return $this->moneySpent;
    }

    /**
     * @param int $moneySpent
     * @return Spent
     */
    public function setMoneySpent(int $moneySpent): Spent
    {
        $this->moneySpent = $moneySpent;
        return $this;
    }

    /**
     * @return string
     */
    public function getCommentary(): string
    {
        return $this->commentary;
    }

    /**
     * @param string $commentary
     * @return Spent
     */
    public function setCommentary(string $commentary): Spent
    {
        $this->commentary = $commentary;
        return $this;
    }

    /**
     * @return string
     */
    public function getCreatedAt(): string
    {
        return $this->created_at;
    }

    /**
     * @param string $created_at
     * @return Spent
     */
    public function setCreatedAt(string $created_at): Spent
    {
        $this->created_at = $created_at;
        return $this;
    }
}