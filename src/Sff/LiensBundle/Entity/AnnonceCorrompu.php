<?php

namespace Sff\LiensBundle\Entity;
use Symfony\Component\Validator\Constraints as Assert;

class AnnonceCorrompu {
    /**
     * @Assert\Length(min=5, max=255)
     */
    private $remarque;

    public function getRemarque()
    {
        return $this->remarque;
    }

    /**
     * Set remarque
     *
     * @param string remarque
     *
     * @return AnnonceCorrompu
     */
    public function setRemarque($remarque)
        {
            $this->remarque = $remarque;

            return $this;
        }
}