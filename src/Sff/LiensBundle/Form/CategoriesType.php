<?php

namespace Sff\LiensBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class CategoriesType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('titre', 'text')
            ->add('parent', 'entity', array('class' => 'Sff\LiensBundle\Entity\Categories', 'query_builder' => function($er) {
                return $er->createQueryBuilder('c')
                    ->orderBy('c.root', 'ASC')
                    ->addOrderBy('c.lft', 'ASC');
            }, 'property' => 'indentedTitle', 'required' => false));
    }
    
    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'Sff\LiensBundle\Entity\Categories'
        ));
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'sff_liensbundle_categories';
    }
}
