<template>
    <DegreesComponent :udemy="udemy" :udacity="udacity" :professionals="professionals"
                      :eduonix="eduonix" :edx="edx" :coursera="coursera" :blockchain="blockChain"/>
</template>

<script>
    import DegreesComponent from "@/components/subComponents/DegreesComponent";
    export default {
        name: "CertificationsComponent",
        components: {DegreesComponent},
        data() {
            return {
                blockChain: [
                    {
                        image: 'tp.png',
                        name: 'Introduction to Blockchain Technology',
                        url: 'https://www.tutorialspoint.com/introduction-to-blockchain-technology/index.asp',
                        certificat: 'https://www.tutorialspoint.com/market/certificate.jsp/TP-F1W4P490?v=1707990033'
                    }
                ],
                professionals: [
                    {
                        image: 'curricula.webp',
                        name: 'Security awareness 2023',
                        url: 'https://www.curricula.com/',
                        certificat: ''
                    },
                    {
                        image: 'toefl.png',
                        name: 'Toefl - B2',
                        url: 'https://www.ets.org/toefl.html',
                        certificat: ''
                    }
                ],
                udemy: [
                    {
                        image: 'nest.svg',
                        name: 'The complete NestJS developer. Enterprise Node.js framework',
                        url: 'https://www.udemy.com/course/the-complete-nestjs-developer-enterprise-nodejs-framework',
                        certificat: ''
                    },
                    {
                        image: 'ssl.jpg',
                        name: 'SSL/TLS Protocol and Handshake Process',
                        url: 'https://www.udemy.com/course/ssltls_handshake/',
                        certificat: ''
                    },
                    {
                        image: 'rails.png',
                        name: 'Learn ruby on rails from scratch',
                        url: 'https://www.udemy.com/course/learn-ruby-on-rails-from-scratch/',
                        certificat: 'https://www.udemy.com/certificate/UC-N8MJGT5U/'
                    },
                    {
                        image: 'jenkins.png',
                        name: 'Jenkins beginner tutorial - Step by step',
                        url: 'https://www.udemy.com/course/jenkins-beginner-tutorial-step-by-step/',
                        certificat: 'https://www.udemy.com/certificate/UC-6a3a3c38-e00b-4743-b9a7-c7d9a76edbec/'
                    },
                    {
                        image: 'vue.png',
                        name: 'VUE JS 3 Crash Course for Beginners 2022',
                        url: 'https://www.udemy.com/course/vue-js-3-crash-course-for-beginners-2022/',
                        certificat: ''
                    },
                    {
                        image: 'ts.png',
                        name: 'Typescript design pattern',
                        url: 'https://www.udemy.com/course/typescript-design-patterns/',
                        certificat: ''
                    },
                    {
                        image: 'react.png',
                        name: 'React basic in just 1 hour',
                        url: 'https://www.udemy.com/course/react-basic-in-just-1-hour/',
                        certificat: 'https://www.udemy.com/certificate/UC-e02c61ec-30f9-4267-8f14-88c2d8816f1e/'
                    },
                    {
                        image: 'ts.png',
                        name: 'Introduction to typescript',
                        url: 'https://www.udemy.com/course/typescript/',
                        certificat: 'https://www.udemy.com/certificate/UC-T6X6YEUF/'
                    },
                    {
                        image: 'mongodb.png',
                        name: 'MongoDB Essentials - Understand the Basics of MongoDB',
                        url: 'https://www.udemy.com/course/mongodb-essentials/',
                        certificat: 'https://www.udemy.com/certificate/UC-PBXGJJIU/'
                    },
                    {
                        image: 'docker.png',
                        name: 'Déployer PHP, Node.js avec Nginx et grâce à Docker',
                        url: 'https://www.udemy.com/course/deployer-php-nodejs-nginx-docker/',
                        certificat: ''
                    },
                    {
                        image: 'ddd.png',
                        name: 'Qu\'est ce que le Domain Driven Design en réalité ?',
                        url: 'https://www.udemy.com/course/quest-ce-que-le-domain-driven-design-en-realite/',
                        certificat: ''
                    }
                ],
                udacity: [
                    {
                        image: 'kotlin.png',
                        name: 'Kotlin Bootcamp for Programmers',
                        url: ' https://learn.udacity.com/courses/ud9011/',
                        certificat: ''
                    }

                ],
                eduonix: [
                    {
                        image: 'vue.png',
                        name: 'Learn Web Development Using VueJS',
                        url: 'https://www.eduonix.com/courses/Web-Development/learn-web-development-using-vuejs',
                        certificat: 'https://www.eduonix.com/certificate/24cdd63ddf'
                    },
                    {
                        image: 'docker.png',
                        name: 'Docker for Beginners',
                        url: 'https://www.eduonix.com/courses/Software-Development/docker-for-beginners',
                        certificat: ''
                    },
                    {
                        image: 'cassandra.png',
                        name: 'Learn Apache Cassandra from Scratch',
                        url: 'https://www.eduonix.com/courses/Web-Development/Learn-Apache-Cassandra-from-Scratch',
                        certificat: ''
                    }
                ],
                edx: [
                    {
                        image: 'edx.png',
                        name: 'Essential Math for Machine Learning: Python Edition',
                        url: 'https://learning.edx.org/course/course-v1:Microsoft+DAT256x+3T2019',
                        certificat: ''
                    }
                ],
                coursera: [
                    {
                        image: 'java.jpg',
                        name: 'Introduction à la programmation orientée objet (en Java)',
                        url: 'https://www.coursera.org/course/java-fr',
                        certificat: ''
                    },
                    {
                        image: 'cpp.png',
                        name: 'Initiation à la programmation (en C++)',
                        url: 'https://class.coursera.org/intro-cpp-fr-001',
                        certificat: ''
                    }
                ]
            }

        }
    }
</script>

<style scoped>

</style>
