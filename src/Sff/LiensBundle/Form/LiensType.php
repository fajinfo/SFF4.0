<?php

namespace Sff\LiensBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class LiensType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('url', 'url', array('required' => true, 'attr' => array('placeholder' => 'http://')))
            ->add('titre', 'text')
            ->add('description', 'textarea')
            ->add('categorie', 'entity', array('label' => 'Catégorie', 'class' => 'Sff\LiensBundle\Entity\Categories', 'query_builder' => function($er) {
                return $er->createQueryBuilder('c')
                    ->orderBy('c.root', 'ASC')
                    ->addOrderBy('c.lft', 'ASC');
            }, 'property' => 'indentedTitle'));
    }
    
    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'Sff\LiensBundle\Entity\Liens'
        ));
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'sff_liensbundle_liens';
    }
}
