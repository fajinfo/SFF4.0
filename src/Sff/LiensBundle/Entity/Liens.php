<?php

namespace Sff\LiensBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Liens
 *
 * @ORM\Table()
 * @ORM\Entity
 */
class Liens
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="url", type="string", length=255)
     * @Assert\Url()
     */
    private $url;

    /**
     * @var string
     *
     * @ORM\Column(name="titre", type="string", length=255)
     * @Assert\Length(min="5", max="255")
     */
    private $titre;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="text", nullable=true)
     */
    private $description;

    /**
     * @var integer
     *
     * @ORM\Column(name="visites", type="integer", nullable=true)
     */
    private $visites;

    /**
     * @var boolean
     *
     * @ORM\Column(name="valide", type="boolean", nullable=true)
     */
    private $valide;

    /**
     * @var boolean
     *
     * @ORM\Column(name="corrompu", type="boolean", nullable=true)
     */
    private $corrompu;

    /**
     * @var string
     *
     * @ORM\ManyToOne(targetEntity="Categories", inversedBy="liens")
     * @ORM\JoinColumn(nullable=false)
     * @Assert\Valid()
     */
    private $categorie;

    /**
     * @var string
     *
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\User")
     * @ORM\JoinColumn(nullable=false)
     * @Assert\Valid()
     */
    private $user;


    /**
     * @Gedmo\Slug(fields={"titre"})
     * @ORM\Column(length=155, unique=true)
     */
    private $slug;


    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set url
     *
     * @param string $url
     *
     * @return Liens
     */
    public function setUrl($url)
    {
        $this->url = $url;

        return $this;
    }

    /**
     * Get url
     *
     * @return string
     */
    public function getUrl()
    {
        return $this->url;
    }

    /**
     * Set titre
     *
     * @param string $titre
     *
     * @return Liens
     */
    public function setTitre($titre)
    {
        $this->titre = $titre;

        return $this;
    }

    /**
     * Get titre
     *
     * @return string
     */
    public function getTitre()
    {
        return $this->titre;
    }

    /**
     * Set description
     *
     * @param string $description
     *
     * @return Liens
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set visites
     *
     * @param integer $visites
     *
     * @return Liens
     */
    public function setVisites($visites)
    {
        $this->visites = $visites;

        return $this;
    }

    /**
     * Get visites
     *
     * @return integer
     */
    public function getVisites()
    {
        return $this->visites;
    }

    /**
     * Set valide
     *
     * @param boolean $valide
     *
     * @return Liens
     */
    public function setValide($valide)
    {
        $this->valide = $valide;

        return $this;
    }

    /**
     * Get valide
     *
     * @return boolean
     */
    public function getValide()
    {
        return $this->valide;
    }

    /**
     * Set categorie
     *
     * @param \Sff\LiensBundle\Entity\Categories $categorie
     *
     * @return Liens
     */
    public function setCategorie(\Sff\LiensBundle\Entity\Categories $categorie)
    {
        $this->categorie = $categorie;

        return $this;
    }

    /**
     * Get categorie
     *
     * @return \Sff\LiensBundle\Entity\Categories
     */
    public function getCategorie()
    {
        return $this->categorie;
    }

    /**
     * Set user
     *
     * @param \AppBundle\Entity\User $user
     *
     * @return Liens
     */
    public function setUser(\AppBundle\Entity\User $user)
    {
        $this->user = $user;

        return $this;
    }

    /**
     * Get user
     *
     * @return \AppBundle\Entity\User
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * Get Slug
     * @return string
     */
    public function getSlug()
    {
        return $this->slug;
    }

    /**
     * Set $corrompu
     *
     * @param boolean $corrompu
     *
     * @return Liens
     */
    public function setCorrompu($corrompu)
    {
        $this->corrompu = $corrompu;

        return $this;
    }

    /**
     * Get Corrompu
     * @return boolean
     */
    public function getCorrompu()
    {
        return $this->corrompu;
    }
    public function visite() {
        $this->visites++;
    }
}

