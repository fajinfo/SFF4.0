<?php

namespace Sff\PubliciteBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class MessagesFetesType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('message', 'textarea')
            ->add('dateDebut', 'date', array('widget' => 'single_text', 'format' => 'dd/MM/yyyy'))
            ->add('dateFin', 'date', array('widget' => 'single_text', 'format' => 'dd/MM/yyyy'));
    }

    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'Sff\PubliciteBundle\Entity\MessagesFetes'
        ));
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'sff_publicitebundle_messagesFetes';
    }
}
