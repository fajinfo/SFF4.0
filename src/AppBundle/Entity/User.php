<?php
// src/AppBundle/Entity/User.php

namespace AppBundle\Entity;

use FOS\UserBundle\Model\User as BaseUser;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity
 * @ORM\Table(name="utilisateurs")
 */
class User extends BaseUser
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     * @Assert\Length(min="0", max="100")
     */
    protected $nom;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     * @Assert\Length(min="0", max="100")
     */
    protected $prenom;

    /**
     * @ORM\Column(type="date", nullable=true)
     * @Assert\Date()
     */
    protected $anniversaire;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\Url()
     */
    protected $siteWeb;

    /**
     * @ORM\Column(type="string", length=255, nullable=true )
     * @Assert\Length(min="0", max="255")
     */
    protected $corpsPompier;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\Length(min="0", max="255")
     */
    protected $signature;

    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Set nom
     *
     * @param string $nom
     *
     * @return User
     */
    public function setNom($nom)
    {
        $this->nom = $nom;

        return $this;
    }

    /**
     * Get nom
     *
     * @return string
     */
    public function getNom()
    {
        return $this->nom;
    }

    /**
     * Set prenom
     *
     * @param string $prenom
     *
     * @return User
     */
    public function setPrenom($prenom)
    {
        $this->prenom = $prenom;

        return $this;
    }

    /**
     * Get prenom
     *
     * @return string
     */
    public function getPrenom()
    {
        return $this->prenom;
    }

    /**
     * Set anniversaire
     *
     * @param \DateTime $anniversaire
     *
     * @return User
     */
    public function setAnniversaire($anniversaire)
    {
        $this->anniversaire = $anniversaire;

        return $this;
    }

    /**
     * Get anniversaire
     *
     * @return \DateTime
     */
    public function getAnniversaire()
    {
        return $this->anniversaire;
    }

    /**
     * Set siteWeb
     *
     * @param string $siteWeb
     *
     * @return User
     */
    public function setSiteWeb($siteWeb)
    {
        $this->siteWeb = $siteWeb;

        return $this;
    }

    /**
     * Get siteWeb
     *
     * @return string
     */
    public function getSiteWeb()
    {
        return $this->siteWeb;
    }

    /**
     * Set corpsPompier
     *
     * @param string $corpsPompier
     *
     * @return User
     */
    public function setCorpsPompier($corpsPompier)
    {
        $this->corpsPompier = $corpsPompier;

        return $this;
    }

    /**
     * Get corpsPompier
     *
     * @return string
     */
    public function getCorpsPompier()
    {
        return $this->corpsPompier;
    }

    /**
     * Set signature
     *
     * @param string $signature
     *
     * @return User
     */
    public function setSignature($signature)
    {
        $this->signature = $signature;

        return $this;
    }

    /**
     * Get signature
     *
     * @return string
     */
    public function getSignature()
    {
        return $this->signature;
    }

    public function getRoleFrancais()
    {
        $retour = '';
        $roles_fr = array('ROLE_SUPER_ADMIN' => 'Super-Administrateur', 'ROLE_ADMIN' => 'Administrateur', 'ROLE_MODERATEUR' => 'Modérateur', 'ROLE_REDACTEUR' => 'Rédacteur', 'ROLE_USER' => 'Utilisateur');
        $roles = $this->getRoles();
        foreach($roles as $role) {
            $retour .= $roles_fr[$role] . ', ';
        }
        return $retour;
    }
}
