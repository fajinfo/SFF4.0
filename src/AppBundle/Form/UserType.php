<?php
namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class UserType extends AbstractType {
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('username', 'text', array('label' => 'Nom d\'utilisateur'))
            ->add('email', 'email')
            ->add('nom', 'text', array('required' => false))
            ->add('prenom', 'text', array('required' => false))
            ->add('anniversaire', 'birthday', array('required' => false, 'widget' => 'choice', 'format' => 'dd-MM-yyyy'))
            ->add('siteWeb', 'url', array('required' => false))
            ->add('corpsPompier', 'text', array('required' => false))
            ->add('signature', 'textarea', array('required' => false))
            ->add('enabled', 'checkbox', array('required' => false, 'label' => 'Activé ?'))
            ->add('locked', 'checkbox', array('required' => false, 'label' => 'Bloquer l\'utilisateur :'))
            ->add('roles', 'choice', array(
                'choices' => array(
                    'ROLE_USER' => 'Utilisateur',
                    'ROLE_REDACTEUR' => 'Rédacteur',
                    'ROLE_MODERATEUR' => 'Modérateur',
                    'ROLE_ADMIN' => 'Administrateur',
                    'ROLE_SUPER_ADMIN' => 'SuperAdministrateur'
                ),
                'multiple' => true));

            if($options['attr']['class'] == 'create') {
                $builder->
                add('plainPassword', 'repeated', array(
                    'type' => 'password',
                    'options' => array('translation_domain' => 'FOSUserBundle'),
                    'first_options' => array('label' => 'form.password'),
                    'second_options' => array('label' => 'form.password_confirmation'),
                    'invalid_message' => 'fos_user.password.mismatch',
                ));
            }
    }

    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'AppBundle\Entity\User'
        ));
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'sff_user';
    }
}