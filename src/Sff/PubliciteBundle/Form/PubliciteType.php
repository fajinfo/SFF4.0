<?php

namespace Sff\PubliciteBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class PubliciteType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('titre', 'text')
            ->add('url', 'url')
            ->add('file', 'file', array('label' => 'Image'))
            ->add('maxAffichage', 'integer', array('label' => 'Nombre d\'affichage de publicité'))
            ->add('maxClic', 'integer', array('label' => 'Nombre de Clic'))
            ->add('dateDebut', 'date', array('widget' => 'single_text', 'format' => 'dd/MM/yyyy'))
            ->add('dateFin', 'date', array('widget' => 'single_text', 'format' => 'dd/MM/yyyy'));
    }

    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'Sff\PubliciteBundle\Entity\Publicite'
        ));
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'sff_publicitebundle_publicite';
    }
}
