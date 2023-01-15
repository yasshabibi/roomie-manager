<?php

namespace App\Entity;

class Room extends BaseEntity{
    private int $id;
    private string $name;
    private int $capacity;
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
     * @return Room
     */
    public function setId(int $id): Room
    {
        $this->id = $id;
        return $this;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @param string $name
     * @return Room
     */
    public function setName(string $name): Room
    {
        $this->name = $name;
        return $this;
    }

    /**
     * @return int
     */
    public function getCapacity(): int
    {
        return $this->capacity;
    }

    /**
     * @param int $capacity
     * @return Room
     */
    public function setCapacity(int $capacity): Room
    {
        $this->capacity = $capacity;
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
     * @return Room
     */
    public function setCreatedAt(string $created_at): Room
    {
        $this->created_at = $created_at;
        return $this;
    }
}