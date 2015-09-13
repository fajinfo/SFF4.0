<?php

namespace Sff\LexiqueBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class DefinitionsType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('terme', 'text')
            ->add('genre', 'choice', array('choices' => array('n.f.' => 'Nom féminin', 'n.m.' => 'Nom masculin', 'abrév.' => 'Abréviation', 'adj.' => 'Adjectif')))
            ->add('definition', 'textarea')
        ;
    }
    
    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'Sff\LexiqueBundle\Entity\Definitions'
        ));
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'sff_lexiquebundle_definitions';
    }
}
