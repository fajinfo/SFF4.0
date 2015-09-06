<?php

namespace Sff\PubliciteBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\HttpFoundation\File\UploadedFile;

/**
 * Publicite
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="Sff\PubliciteBundle\Entity\PubliciteRepository")
 * @ORM\HasLifecycleCallbacks
 */
class Publicite
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
     * @ORM\Column(name="image", type="string", length=255)
     */
    private $image;

    /**
     * @var string
     *
     * @ORM\Column(name="titre", type="string", length=255)
     * @Assert\Length(min=3, max=255)
     */
    private $titre;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="dateDebut", type="date")
     * @Assert\Date()
     */
    private $dateDebut;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="dateFin", type="date")
     * @Assert\Date()
     */
    private $dateFin;

    /**
     * @var integer
     *
     * @ORM\Column(name="nbAffichage", type="integer", nullable=true)
     */
    private $nbAffichage;

    /**
     * @var integer
     *
     * @ORM\Column(name="nbClic", type="integer", nullable=true)
     */
    private $nbClic;

    /**
     * @var integer
     *
     * @ORM\Column(name="maxAffichage", type="integer")
     */
    private $maxAffichage;

    /**
     * @var integer
     *
     * @ORM\Column(name="maxClic", type="integer")
     */
    private $maxClic;
    private $file;
    private $tempFilename;


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
     * @return Publicite
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
     * Set image
     *
     * @param string $image
     *
     * @return Publicite
     */
    public function setImage($image)
    {
        $this->image = $image;

        return $this;
    }

    /**
     * Get image
     *
     * @return string
     */
    public function getImage()
    {
        return $this->image;
    }

    /**
     * Set titre
     *
     * @param string $titre
     *
     * @return Publicite
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
     * Set dateDebut
     *
     * @param \DateTime $dateDebut
     *
     * @return Publicite
     */
    public function setDateDebut($dateDebut)
    {
        $this->dateDebut = $dateDebut;

        return $this;
    }

    /**
     * Get dateDebut
     *
     * @return \DateTime
     */
    public function getDateDebut()
    {
        return $this->dateDebut;
    }

    /**
     * Set dateFin
     *
     * @param \DateTime $dateFin
     *
     * @return Publicite
     */
    public function setDateFin($dateFin)
    {
        $this->dateFin = $dateFin;

        return $this;
    }

    /**
     * Get dateFin
     *
     * @return \DateTime
     */
    public function getDateFin()
    {
        return $this->dateFin;
    }

    /**
     * Set nbAffichage
     *
     * @param integer $nbAffichage
     *
     * @return Publicite
     */
    public function setNbAffichage($nbAffichage)
    {
        $this->nbAffichage = $nbAffichage;

        return $this;
    }

    /**
     * Get nbAffichage
     *
     * @return integer
     */
    public function getNbAffichage()
    {
        return $this->nbAffichage;
    }

    /**
     * Set nbClic
     *
     * @param integer $nbClic
     *
     * @return Publicite
     */
    public function setNbClic($nbClic)
    {
        $this->nbClic = $nbClic;

        return $this;
    }

    /**
     * Get nbClic
     *
     * @return integer
     */
    public function getNbClic()
    {
        return $this->nbClic;
    }

    /**
     * Set maxAffichage
     *
     * @param integer $maxAffichage
     *
     * @return Publicite
     */
    public function setMaxAffichage($maxAffichage)
    {
        $this->maxAffichage = $maxAffichage;

        return $this;
    }

    /**
     * Get maxAffichage
     *
     * @return integer
     */
    public function getMaxAffichage()
    {
        return $this->maxAffichage;
    }

    /**
     * Set maxClic
     *
     * @param integer $maxClic
     *
     * @return Publicite
     */
    public function setMaxClic($maxClic)
    {
        $this->maxClic = $maxClic;

        return $this;
    }

    /**
     * Get maxClic
     *
     * @return integer
     */
    public function getMaxClic()
    {
        return $this->maxClic;
    }

    public function clic() {
        $this->nbClic++;
    }
    public function affiche()
    {
        $this->nbAffichage++;
    }
    protected function getUploadRootDir() {
        return __DIR__.'/../../../../web/upload/publicite';
    }
    public function getImagePath() {
        return 'upload/publicite/'.$this->image;
    }
    public function setFile(UploadedFile $file) {
        $this->file = $file;
        if(null !== $this->image) {
            $this->tempFilename = $this->image;
            $this->image = null;
        }
    }
    /**
     * @ORM\PrePersist()
     * @ORM\PreUpdate()
     */
    public function preUpload() {
        if(null === $this->file) {
            return false;
        }
        if($this->tempFilename !== null) {
           $file = $this->getUploadRootDir().'/'.$this->tempFilename();
            if(file_exists($file)) {
                unlink($file);
            }
        }
        $this->image = rand(0, 99999).'.'.$this->file->guessExtension();
        $this->file->move($this->getUploadRootDir(), $this->image);
    }
    /*
     * @ORM\PostRemove()
     */
    public function postRemoveUpload() {
        $file = $this->getUploadRootDir().'/'.$this->image();
        if(file_exists($file)) {
            unlink($file);
        }
    }
    public function getFile() {
        return $this->file;
    }
}

