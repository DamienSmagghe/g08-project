export const questions =
[
    {
        id: 0,
        text: 'We need to review and <strong>reorganize our economic and social</strong> policies. What new policy do you want to apply?',
        answers: [{
                text: 'Making our children work',
				icon: 'briefcase-medical',
                effects: [{
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: -0.05
                    },
                    {
                        themeAffected: 3,
                        value: -0.1
                    }
                ]
            },
            {
                text: 'Make all our men work on a voluntary basis',
				icon: 'coins',
                effects: [{
                        themeAffected: 3,
                        value: -0.05
                    },
                    {
                        themeAffected: 0,
                        value: -0.05
                    },
                    {
                        themeAffected: 2,
                        value: 0.05
                    }
                ]
            },
            {
                text: 'Fostering investment in the education of our young people',
				icon: 'lightbulb',
                effects: [{
                        themeAffected: 7,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: 0.05
                    },
                    {
                        themeAffected: 0,
                        value: -0.05
                    }
                ]
            }
        ]

    },
    {
        id: 1,
        text: 'You benefit from <strong>unused</strong> green spaces. In which areas would you like to invest?',
        answers: [{
                text: 'Agriculture. Resources need to be improved',
				icon: 'tree',
                effects: [{
                        themeAffected: 12,
                        value: 0.05
                    },
                    {
                        themeAffected: 0,
                        value: 0.05
                    },
                    {
                        themeAffected: 14,
                        value: -0.05
                    },
                    {
                        themeAffected: 4,
                        value: -0.05
                    },
                    {
                        themeAffected: 3,
                        value: 0.05
                    },
                    {
                        themeAffected: 13,
                        value: 0.1
                    }
                ]
            },
            {
                text: 'Industries. The economy must be improved',
				icon: 'industry',
                effects: [{
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 4,
                        value: 0.1
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    },
                    {
                        themeAffected: 11,
                        value: -0.1
                    },
                    {
                        themeAffected: 12,
                        value: -0.05
                    }
                ]
            },
            {
                text: 'Entertainment. Comfort must be improved',
                icon: 'couch',
				effects: [{
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 6,
                        value: 0.05
                    },
                    {
                        themeAffected: 14,
                        value: -0.05
                    },
                    {
                        themeAffected: 12,
                        value: -0.05
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        text: 'Inequalities between inhabitants are increasing. You have the opportunity <strong>to equalize</strong> all salaries, but at your own <strong>risk</strong>. What do you choose?',
        answers: [{
                text: 'Let\'s be fair and give everyone the same salary',
				icon: 'couch',
                effects: [{
                        themeAffected: 6,
                        value: 0.05
                    },
                    {
                        themeAffected: 1,
                        value: 0.05
                    },
                    {
                        themeAffected: 3,
                        value: 0.05
                    },
                    {
                        themeAffected: 7,
                        value: 0.05
                    },
                    {
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 0,
                        value: -0.1
                    },
                    {
                        themeAffected: 4,
                        value: -0.05
                    },
                    {
                        themeAffected: 13,
                        value: -0.05
                    }
                ]
            },
            {
                text: 'Let us not equalize wages to preserve the economy',
				icon: 'coins',
                effects: [{
                        themeAffected: 6,
                        value: -0.05
                    },
                    {
                        themeAffected: 1,
                        value: -0.05
                    },
                    {
                        themeAffected: 7,
                        value: -0.05
                    },
                    {
                        themeAffected: 2,
                        value: -0.1
                    },
                    {
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 4,
                        value: 0.1
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        text: 'Animal meat is highly valued by the population. What is the <strong>maximum</strong> amount of meat per person that you allow?',
        answers: [{
                text: 'No pieces of meat',
				icon: 'leaf',
                effects: [{
                        themeAffected: 8,
                        value: 0.1
                    },
                    {
                        themeAffected: 12,
                        value: 0.1
                    },
                    {
                        themeAffected: 3,
                        value: -0.05
                    }
                ]
            },
            {
                text: '1 to 2 pieces of meat per week',
				icon: 'tree',
                effects: [{
                        themeAffected: 12,
                        value: -0.05
                    },
                    {
                        themeAffected: 0,
                        value: 0.05
                    }
                ]
            },
            {
                text: 'Infinite amount of meat',
				icon: 'trash-alt',
                effects: [{
                        themeAffected: 12,
                        value: -0.1
                    },
                    {
                        themeAffected: 0,
                        value: 0.1
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        text: 'Following several <strong>unfavourable reforms</strong>, workers all over the world went on strike. What response do you choose to make to the claims?',
        answers: [{
                text: 'Yield to workers\' demands',
				icon: 'theater-masks',
                effects: [{
                        themeAffected: 0,
                        value: -0.1
                    },
                    {
                        themeAffected: 7,
                        value: -0.1
                    },
                    {
                        themeAffected: 6,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: 0.1
                    }
                ]
            },
            {
                text: 'Ignore claims',
				icon: 'coins',
                effects: [{
                        themeAffected: 6,
                        value: -0.1
                    },
                    {
                        themeAffected: 0,
                        value: -0.1
                    },
                    {
                        themeAffected: 2,
                        value: -0.1
                    },
                    {
                        themeAffected: 5,
                        value: -0.05
                    }
                ]
            },
            {
                text: 'Sending the army to repress the protesters',
				icon: 'industry',
                effects: [{
                        themeAffected: 6,
                        value: -0.1
                    },
                    {
                        themeAffected: 3,
                        value: -0.1
                    },
                    {
                        themeAffected: 2,
                        value: -0.1
                    },
                    {
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 4,
                        value: 0.1
                    },
                    {
                        themeAffected: 5,
                        value: 0.05
                    },
                    {
                        themeAffected: 14,
                        value: 0.1
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        text: 'Following a serious accident in an agri-food industry, you are in charge of <strong>closing the company</strong> or <strong>starting from scratch</strong> (loss of money). What are you doing? What are you doing?',
        answers: [{
                text: 'Close the company. It was already polluting a lot.',
				icon: 'theater-masks',
                effects: [{
                        themeAffected: 2,
                        value: -0.1
                    },
                    {
                        themeAffected: 6,
                        value: -0.1
                    },
                    {
                        themeAffected: 4,
                        value: -0.05
                    },
                    {
                        themeAffected: 8,
                        value: 0.05
                    },
                    {
                        themeAffected: 3,
                        value: 0.1
                    }
                ]
            },
            {
                text: 'Get the company back on its feet. The industry must be preserved',
				icon: 'couch',
                effects: [{
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 0,
                        value: -0.1
                    },
                    {
                        themeAffected: 4,
                        value: 0.1
                    },
                    {
                        themeAffected: 5,
                        value: 0.1
                    },
                    {
                        themeAffected: 8,
                        value: -0.05
                    }
                ]
            }
        ]
    },
    {
        id: 6,
        text: 'Your engineers want to use arcanite to <strong>improve the production</strong> of your planet, it is a <strong>polluting</strong> but very efficient material. What do you decide?',
        answers: [{
                text: 'Yes, let\'s improve the industry',
				icon: 'industry',
                effects: [{
                        themeAffected: 7,
                        value: 0.1
                    },
                    {
                        themeAffected: 4,
                        value: 0.1
                    },
                    {
                        themeAffected: 0,
                        value: 0.05
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    },
                    {
                        themeAffected: 3,
                        value: -0.05
                    }
                ]
            },
            {
                text: 'No, let\'s protect the ecology',
				icon: 'trash-alt',
                effects: [{
                        themeAffected: 4,
                        value: -0.1
                    },
                    {
                        themeAffected: 0,
                        value: -0.05
                    },
                    {
                        themeAffected: 13,
                        value: -0.05
                    },
                    {
                        themeAffected: 8,
                        value: 0.1
                    },
                    {
                        themeAffected: 3,
                        value: 0.05
                    }
                ]
            }
        ]
    },
    {
        id: 7,
        text: 'You need to produce more books to strengthen your colony\'s <strong>education</strong>. In return, you must <strong>destroy 40,000 trees</strong>. What do you decide?',
        answers: [{
                text: 'Let us preserve the forest, let us not destroy the trees',
				icon: 'leaf',
                effects: [{
                        themeAffected: 12,
                        value: 0.1
                    },
                    {
                        themeAffected: 14,
                        value: -0.1
                    },
                    {
                        themeAffected: 8,
                        value: 0.1
                    }
                ]
            },
            {
                text: 'Destroy half the trees',
				icon: 'school',
                effects: [{
                        themeAffected: 1,
                        value: 0.05
                    },
                    {
                        themeAffected: 14,
                        value: 0.05
                    },
                    {
                        themeAffected: 12,
                        value: -0.05
                    }
                ]
            },
            {
                text: 'Destroy the 40,000 trees',
				icon: 'truck-loading',
                effects: [{
                        themeAffected: 12,
                        value: -0.1
                    },
                    {
                        themeAffected: 14,
                        value: 0.1
                    },
                    {
                        themeAffected: 1,
                        value: 0.1
                    }
                ]
            }
        ]
    },
    {
        id: 8,
        text: 'Teachers are proposing a new subject that would explain the <strong>importance of industrial trades</strong>. This would further encourage work in the factory at the end of the studies. What do you think of that?',
        answers: [{
                text: 'Yes, let\'s encourage industrial work',
				icon: 'industry',
                effects: [{
                        themeAffected: 7,
                        value: 0.1
                    },
                    {
                        themeAffected: 4,
                        value: 0.1
                    },
                    {
                        themeAffected: 1,
                        value: 0.05
                    },
                    {
                        themeAffected: 8,
                        value: -0.05
                    },
                    {
                        themeAffected: 14,
                        value: -0.05
                    },
                    {
                        themeAffected: 12,
                        value: -0.05
                    },
                    {
                        themeAffected: 11,
                        value: -0.05
                    }
                ]
            },
            {
                text: 'No, let\'s preserve the environment',
				icon: 'leaf',
                effects: [{
                        themeAffected: 7,
                        value: -0.05
                    },
                    {
                        themeAffected: 4,
                        value: -0.05
                    },
                    {
                        themeAffected: 12,
                        value: 0.05
                    },
                    {
                        themeAffected: 11,
                        value: 0.05
                    },
                    {
                        themeAffected: 8,
                        value: 0.05
                    }
                ]
            }
        ]
    },
    {
        id: 9,
        text: 'For population <strong>development</strong>, it is imperative to invest in the education sector. Do you agree to give <strong>less budget</strong> to industries but more to the education sector?',
        answers: [{
                text: 'Yes, let\'s prioritize teaching',
				icon: 'school',
                effects: [{
                        themeAffected: 7,
                        value: 0.1
                    },
                    {
                        themeAffected: 6,
                        value: 0.05
                    },
                    {
                        themeAffected: 4,
                        value: -0.05
                    },
                    {
                        themeAffected: 8,
                        value: -0.05
                    },
                    {
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 1,
                        value: 0.1
                    }
                ]
            },
            {
                text: 'No, the economy remains a priority sector',
				icon: 'coins',
                effects: [{
                        themeAffected: 4,
                        value: 0.1
                    },
                    {
                        themeAffected: 7,
                        value: -0.05
                    },
                    {
                        themeAffected: 1,
                        value: -0.1
                    },
                    {
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 6,
                        value: -0.05
                    }
                ]
            }
        ]
    },
    {
        id: 10,
        text: 'There is a state of <strong>social anxiety</strong> in your colony, we suggest that you set up brothels in order to increase the <strong>satisfaction level</strong>. Is that a good idea?',
        answers: [{
                text: 'Yes, the well-being of the population first and foremost',
				icon: 'couch',
                effects: [{
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 7,
                        value: 0.1
                    },
                    {
                        themeAffected: 3,
                        value: -0.05
                    },
                    {
                        themeAffected: 14,
                        value: -0.05
                    }
                ]
            },
            {
                text: 'No, let\'s preserve the money for better causes',
				icon: 'lightbulb',
                effects: [{
                        themeAffected: 2,
                        value: -0.1
                    },
                    {
                        themeAffected: 7,
                        value: -0.1
                    },
                    {
                        themeAffected: 14,
                        value: 0.1
                    }
                ]
            }
        ]
    },
    {
        id: 11,
        text: 'Do you think organizing exploration sessions is useful? The interest: to be able <strong>to discover and conquer</strong> new territories. The risk: <strong>reducing green space</strong>.',
        answers: [{
                text: 'Yes, let\'s expand the human surface area',
				icon: 'coins',
                effects: [{
                        themeAffected: 6,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: 0.05
                    },
                    {
                        themeAffected: 0,
                        value: 0.05
                    },
                    {
                        themeAffected: 12,
                        value: -0.1
                    }
                ]
            },
            {
                text: 'No, let\'s respect the environment',
				icon: 'leaf',
                effects: [{
                        themeAffected: 12,
                        value: 0.1
                    },
                    {
                        themeAffected: 3,
                        value: 0.05
                    },
                    {
                        themeAffected: 6,
                        value: -0.05
                    },
                    {
                        themeAffected: 2,
                        value: -0.05
                    },
                    {
                        themeAffected: 0,
                        value: -0.05
                    }
                ]
            }
        ]
    },
    {
        id: 12,
        text: 'Employees are not motivated to work. A <strong>reward</strong> system could motivate them more, but the disadvantage would be the <strong>price of gifts</strong>. Do you accept?',
        answers: [{
                text: 'Yes, the comfort of the population above all',
				icon: 'couch',
                effects: [{
                        themeAffected: 7,
                        value: 0.05
                    },
                    {
                        themeAffected: 0,
                        value: 0.05
                    },
                    {
                        themeAffected: 4,
                        value: 0.05
                    },
                    {
                        themeAffected: 2,
                        value: 0.05
                    }
                ]
            },
            {
                text: 'No, our production will suffer as a result',
				icon: 'industry',
                effects: [{
                        themeAffected: 7,
                        value: -0.5
                    },
                    {
                        themeAffected: 4,
                        value: -0.05
                    },
                    {
                        themeAffected: 6,
                        value: -0.05
                    },
                    {
                        themeAffected: 8,
                        value: -0.05
                    }
                ]
            }
        ]
    },
    {
        id: 13,
        text: 'An epidemic occurs in your colony. A group of 4000 settlers quickly found themselves <strong>infected</strong> and placed in <strong>quarantine</strong>. What do you decide?',
        answers: [{
                text: 'Spending money to find a cure',
				icon: 'coins',
                effects: [{
                        themeAffected: 3,
                        value: 0.1
                    },
                    {
                        themeAffected: 7,
                        value: 0.1
                    },
                    {
                        themeAffected: 0,
                        value: -0.1
                    },
                    {
                        themeAffected: 2,
                        value: 0.1
                    }
                ]
            },
            {
                text: 'Eliminate these men to stop the epidemic',
				icon: 'briefcase-medical',
                effects: [{
                        themeAffected: 6,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: -0.1
                    },
                    {
                        themeAffected: 3,
                        value: 0.05
                    }
                ]
            },
            {
                text: 'Move the infected to another (unpopulated) planet',
				icon: 'theater-masks',
                effects: [{
                        themeAffected: 6,
                        value: 0.1
                    },
                    {
                        themeAffected: 0,
                        value: -0.1
                    },
                    {
                        themeAffected: 2,
                        value: -0.1
                    },
                    {
                        themeAffected: 8,
                        value: 0.05
                    }
                ]
            }
        ]
    },
    {
        id: 14,
        text: 'A health department has been created within your colony. You must therefore build <strong>sanitary facilities</strong>, but the construction budget is <strong>limited</strong>. Which solution do you recommend?',
        answers: [{
                text: 'Prioritize medicinal plants over health infrastructure',
				icon: 'leaf',
                effects: [{
                        themeAffected: 2,
                        value: -0.05
                    },
                    {
                        themeAffected: 3,
                        value: 0.05
                    },
                    {
                        themeAffected: 14,
                        value: 0.05
                    },
                    {
                        themeAffected: 7,
                        value: -0.1
                    },
                    {
                        themeAffected: 12,
                        value: -0.1
                    },
                    {
                        themeAffected: 13,
                        value: -0.1
                    }
                ]
            },
            {
                text: 'Build the health infrastructure without any budget',
				icon: 'building',
                effects: [{
                        themeAffected: 3,
                        value: 0.1
                    },
                    {
                        themeAffected: 7,
                        value: 0.05
                    },
                    {
                        themeAffected: 0,
                        value: 0.05
                    },
                    {
                        themeAffected: 2,
                        value: -0.1
                    },
                    {
                        themeAffected: 14,
                        value: -0.05
                    }
                ]
            },
            {
                text: 'Borrow from banks to create the infrastructure',
				icon: 'coins',
                effects: [{
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 3,
                        value: 0.1
                    },
                    {
                        themeAffected: 7,
                        value: 0.05
                    },
                    {
                        themeAffected: 0,
                        value: -0.1
                    },
                    {
                        themeAffected: 14,
                        value: -0.1
                    }
                ]
            }
        ]
    },
    {
        id: 15,
        text: 'You have the opportunity to promote <strong>new encounters</strong> in your colony by developing sports, artistic and intellectual <strong>associations</strong>. Do you accept?',
        answers: [{
                text: 'Yes, let\'s invest in the company',
				icon: 'building',
                effects: [{
                        themeAffected: 6,
                        value: 0.1
                    },
                    {
                        themeAffected: 0,
                        value: 0.05
                    },
                    {
                        themeAffected: 5,
                        value: 0.05
                    },
                    {
                        themeAffected: 3,
                        value: 0.05
                    },
                    {
                        themeAffected: 8,
                        value: -0.05
                    },
                    {
                        themeAffected: 14,
                        value: -0.1
                    }
                ]
            },
            {
                text: 'No, let\'s save money',
				icon: 'coins',
                effects: [{
                        themeAffected: 6,
                        value: -0.1
                    },
                    {
                        themeAffected: 3,
                        value: -0.05
                    },
                    {
                        themeAffected: 0,
                        value: -0.05
                    },
                    {
                        themeAffected: 12,
                        value: 0.05
                    }
                ]
            }
        ]
    },
    {
        id: 16,
        text: 'We propose that you create a <strong>new entertainment space</strong> that would be powered by clean energy. However, <strong>deforestation</strong> of a forest will be necessary. Do you want to start the project?',
        answers: [{
                text: 'Yes, let\'s increase the comfort of society',
				icon: 'couch',
                effects: [{
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 12,
                        value: -0.1
                    },
                    {
                        themeAffected: 14,
                        value: -0.1
                    },
                    {
                        themeAffected: 8,
                        value: -0.05
                    }
                ]
            },
            {
                text: 'No, let\'s preserve the fauna and flora',
				icon: 'leaf',
                effects: [{
                        themeAffected: 12,
                        value: 0.1
                    },
                    {
                        themeAffected: 14,
                        value: 0.05
                    },
                    {
                        themeAffected: 2,
                        value: -0.1
                    }
                ]
            }
        ]
    },
    {
        id: 17,
        text: 'An oil spill occurred. You can <strong>stop</strong> the flow of the oil slick or <strong>let</strong> the oil flow but this would threaten the lives of 1000 people. What do you decide?',
        answers: [{
                text: 'Stop the flow of the oil spill',
				icon: 'water',
                effects: [{
                        themeAffected: 11,
                        value: 0.1
                    },
                    {
                        themeAffected: 12,
                        value: 0.1
                    },
                    {
                        themeAffected: 6,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 0,
                        value: -0.1
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    }
                ]
            },
            {
                text: 'Allow the oil spill to pass',
				icon: 'trash-alt',
                effects: [{
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 11,
                        value: -0.1
                    },
                    {
                        themeAffected: 12,
                        value: -0.1
                    },
                    {
                        themeAffected: 6,
                        value: -0.1
                    },
                    {
                        themeAffected: 10,
                        value: -0.1
                    },
                    {
                        themeAffected: 2,
                        value: -0.1
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    }
                ]
            }
        ]
    },
    {
        id: 18,
        text: 'Your colony is beginning to establish itself. However, your engineers are <strong>wondering</strong> how the buildings could be built. Which <strong>material</strong> would you find most useful?',
        answers: [{
                text: 'Use arcanite (terrestrial equivalent of sand)',
				icon: 'tree',
                effects: [{
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 3,
                        value: 0.1
                    },
                    {
                        themeAffected: 0,
                        value: 0.05
                    },
                    {
                        themeAffected: 5,
                        value: 0.1
                    },
                    {
                        themeAffected: 7,
                        value: 0.05
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    },
                    {
                        themeAffected: 14,
                        value: -0.1
                    },
                    {
                        themeAffected: 13,
                        value: -0.1
                    }
                ]
            },
            {
                text: 'Use Liquidia (terrestrial equivalent of iron)',
				icon: 'building',
                effects: [{
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 0,
                        value: 0.05
                    },
                    {
                        themeAffected: 5,
                        value: 0.1
                    },
                    {
                        themeAffected: 7,
                        value: 0.05
                    },
                    {
                        themeAffected: 6,
                        value: 0.05
                    },
                    {
                        themeAffected: 8,
                        value: -0.05
                    },
                    {
                        themeAffected: 3,
                        value: -0.05
                    },
                    {
                        themeAffected: 10,
                        value: -0.05
                    }
                ]
            },
            {
                text: 'Use Plurium (terrestrial equivalent of aluminium)',
				icon: 'trash-alt',
                effects: [{
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 5,
                        value: 0.1
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    },
                    {
                        themeAffected: 14,
                        value: 0.1
                    },
                    {
                        themeAffected: 13,
                        value: 0.1
                    }
                ]
            }
        ]
    },
    {
        id: 19,
        text: 'We propose that you <strong>create new roads</strong> on your planet to make cities more <strong>accessible</strong>. Are you starting the project?',
        answers: [{
                text: 'Yes, let\'s improve the road network',
				icon: 'building',
                effects: [{
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 0,
                        value: 0.05
                    },
                    {
                        themeAffected: 12,
                        value: -0.1
                    },
                    {
                        themeAffected: 8,
                        value: -0.05
                    }
                ]
            },
            {
                text: 'No, let\'s preserve the ecology',
				icon: 'leaf',
                effects: [{
                        themeAffected: 12,
                        value: 0.1
                    },
                    {
                        themeAffected: 8,
                        value: 0.1
                    },
                    {
                        themeAffected: 0,
                        value: -0.05
                    },
                    {
                        themeAffected: 2,
                        value: -0.1
                    }
                ]
            }
        ]
    },
    {
        id: 20,
        text: 'You can build 20,000 <strong>telephone lines</strong> on your planet. However, <strong>electricity is scarce</strong> because your engineers have just arrived in the field. What do you want to do?',
        answers: [{
                text: 'Yes, let\'s improve the telephone network',
				icon: 'trash-alt',
                effects: [{
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 0,
                        value: 0.05
                    },
                    {
                        themeAffected: 6,
                        value: 0.05
                    },
                    {
                        themeAffected: 12,
                        value: -0.1
                    },
                    {
                        themeAffected: 13,
                        value: -0.1
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    },
                    {
                        themeAffected: 3,
                        value: -0.05
                    }
                ]
            },
            {
                text: 'No, let\'s preserve the environment',
				icon: 'leaf',
                effects: [{
                        themeAffected: 2,
                        value: -0.05
                    },
                    {
                        themeAffected: 12,
                        value: 0.1
                    },
                    {
                        themeAffected: 0,
                        value: -0.05
                    },
                    {
                        themeAffected: 14,
                        value: -0.1
                    },
                    {
                        themeAffected: 3,
                        value: 0.05
                    }
                ]
            }
        ]
    },
    {
        id: 21,
        text: 'A product capable of <strong>increasing plant growth</strong> could develop the global ecosystem, but this would <strong>reduce the urban space</strong> of your colony. What do you decide?',
        answers: [{
                text: 'You leave the product for sale',
				icon: 'building',
                effects: [{
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 12,
                        value: 0.05
                    },
                    {
                        themeAffected: 8,
                        value: 0.05
                    },
                    {
                        themeAffected: 2,
                        value: -0.05
                    },
                    {
                        themeAffected: 5,
                        value: -0.1
                    }
                ]
            },
            {
                text: 'You put the product in a limited offer',
				icon: 'couch',
                effects: [{
                        themeAffected: 0,
                        value: 0.05
                    },
                    {
                        themeAffected: 12,
                        value: 0.05
                    },
                    {
                        themeAffected: 8,
                        value: 0.05
                    },
                    {
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 5,
                        value: -0.05
                    }
                ]
            },
            {
                text: 'You do not sell the product',
				icon: 'coins',
                effects: [{
                        themeAffected: 0,
                        value: -0.1
                    },
                    {
                        themeAffected: 12,
                        value: -0.05
                    },
                    {
                        themeAffected: 8,
                        value: -0.05
                    },
                    {
                        themeAffected: 2,
                        value: 0.05
                    },
                    {
                        themeAffected: 5,
                        value: 0.05
                    }
                ]
            }
        ]
    },
    {
        id: 22,
        text: 'The government of your colony has gone into <strong>debt</strong>. New taxes are proposed to reduce the debt. On the other hand, it is likely to increase <strong>social conflicts</strong>. Do you accept?',
        answers: [{
                text: 'Yes, it is better not to increase the colony\'s debt further',
				icon: 'user-alt',
                effects: [{
                        themeAffected: 13,
                        value: 0.1
                    },
                    {
                        themeAffected: 14,
                        value: 0.05
                    },
                    {
                        themeAffected: 10,
                        value: -0.1
                    },
                    {
                        themeAffected: 0,
                        value: -0.05
                    },
                    {
                        themeAffected: 3,
                        value: -0.05
                    },
                    {
                        themeAffected: 2,
                        value: -0.05
                    }
                ]
            },
            {
                text: 'No, it is better to avoid a revolution',
				icon: 'coins',
                effects: [{
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 10,
                        value: 0.05
                    },
                    {
                        themeAffected: 0,
                        value: -0.1
                    },
                    {
                        themeAffected: 13,
                        value: -0.05
                    },
                    {
                        themeAffected: 7,
                        value: -0.05
                    }
                ]
            }
        ]
    },
    {
        id: 23,
        text: 'Recently, your colony has been divided because many settlers want to adopt a new <strong>religion</strong>. It would aim <strong>to sacrifice</strong> human beings. What do you choose to do?',
        answers: [{
                text: 'Approve human sacrifices',
				icon: 'user-alt',
                effects: [{
                        themeAffected: 6,
                        value: 0.05
                    },
                    {
                        themeAffected: 11,
                        value: 0.05
                    },
                    {
                        themeAffected: 12,
                        value: 0.05
                    },
                    {
                        themeAffected: 13,
                        value: 0.05
                    },
                    {
                        themeAffected: 7,
                        value: 0.05
                    },
                    {
                        themeAffected: 14,
                        value: 0.05
                    },
                    {
                        themeAffected: 10,
                        value: -0.1
                    },
                    {
                        themeAffected: 4,
                        value: -0.05
                    },
                    {
                        themeAffected: 9,
                        value: -0.05
                    }
                ]
            },
            {
                text: 'Do not approve of human sacrifices',
				icon: 'leaf',
                effects: [{
                        themeAffected: 8,
                        value: 0.05
                    },
                    {
                        themeAffected: 14,
                        value: 0.05
                    },
                    {
                        themeAffected: 10,
                        value: 0.05
                    },
                    {
                        themeAffected: 3,
                        value: 0.05
                    },
                    {
                        themeAffected: 13,
                        value: 0.05
                    },
                    {
                        themeAffected: 6,
                        value: -0.05
                    },
                    {
                        themeAffected: 12,
                        value: -0.05
                    },
                    {
                        themeAffected: 11,
                        value: -0.05
                    }
                ]
            }
        ]
    },
    {
        id: 24,
        text: 'The <strong>water dam</strong> upstream of the capital is in danger of collapsing. The waste next door can create a <strong>garbage barrier</strong> that will hold water. Do you confirm the proposal?',
        answers: [{
                text: 'Yes, let us prevent the inhabitants from dying',
				icon: 'user-alt',
                effects: [{
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 3,
                        value: 0.1
                    },
                    {
                        themeAffected: 10,
                        value: 0.1
                    },
                    {
                        themeAffected: 14,
                        value: -0.05
                    },
                    {
                        themeAffected: 8,
                        value: 0.1
                    },
                    {
                        themeAffected: 11,
                        value: -0.1
                    }
                ]
            },
            {
                text: 'No, let\'s stop the planet from dying',
				icon: 'trash-alt',
                effects: [{
                        themeAffected: 8,
                        value: 0.1
                    },
                    {
                        themeAffected: 11,
                        value: 0.1
                    },
                    {
                        themeAffected: 14,
                        value: -0.1
                    },
                    {
                        themeAffected: 2,
                        value: -0.1
                    },
                    {
                        themeAffected: 3,
                        value: -0.1
                    },
                    {
                        themeAffected: 10,
                        value: -0.1
                    }
                ]
            }
        ]
    },
    {
        id: 25,
        text: 'The price of electricity is only increasing. In order to <strong>reduce its consumption</strong>, we suggest that you <strong>deactivate</strong> all electrical objects. What choice do you recommend?',
        answers: [{
                text: 'Never turn off the electricity',
                icon: 'bolt',
                effects: [{
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 4,
                        value: 0.1
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    },
                    {
                        themeAffected: 9,
                        value: -0.1
                    },
                    {
                        themeAffected: 13,
                        value: -0.05
                    },
                    {
                        themeAffected: 12,
                        value: -0.05
                    }
                ]
            },
            {
                text: 'Let\'s deactivate 1 to 2 hours a day',
                icon: 'tree',
                effects: [{
                        themeAffected: 9,
                        value: 0.05
                    },
                    {
                        themeAffected: 13,
                        value: 0.05
                    },
                    {
                        themeAffected: 12,
                        value: 0.05
                    },
                    {
                        themeAffected: 0,
                        value: -0.05
                    },
                    {
                        themeAffected: 4,
                        value: -0.05
                    },
                    {
                        themeAffected: 8,
                        value: -0.05
                    }
                ]
            },
            {
                text: 'Let\'s deactivate 3 to 4 hours a day',
                icon: 'leaf',
                effects: [{
                        themeAffected: 8,
                        value: 0.05
                    },
                    {
                        themeAffected: 9,
                        value: 0.1
                    },
                    {
                        themeAffected: 13,
                        value: 0.1
                    },
                    {
                        themeAffected: 12,
                        value: 0.1
                    },
                    {
                        themeAffected: 0,
                        value: -0.1
                    },
                    {
                        themeAffected: 4,
                        value: -0.1
                    }
                ]
            }
        ]
    },
    {
        id: 26,
        text: 'The <strong>price of gasoline</strong> is only increasing. The economists in your colony can\'t agree. What is the maximum amount of <strong>fuel</strong> per person you could imagine?',
        answers: [{
                text: 'Think of the planet: no gasoline sales',
                icon: 'leaf',
                effects: [{
                        themeAffected: 12,
                        value: 0.1
                    },
                    {
                        themeAffected: 3,
                        value: 0.1
                    },
                    {
                        themeAffected: 8,
                        value: 0.1
                    },
                    {
                        themeAffected: 0,
                        value: -0.1
                    },
                    {
                        themeAffected: 4,
                        value: -0.1
                    }
                ]
            },
            {
                text: 'Keeping the economy going: no fuel limits',
                icon: 'trash-alt',
                effects: [{
                        themeAffected: 8,
                        value: -0.1
                    },
                    {
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 4,
                        value: 0.05
                    },
                    {
                        themeAffected: 12,
                        value: -0.1
                    }
                ]
            },
            {
                text: 'Let\'s keep a balance: 10 to 25 litres per week',
                icon: 'briefcase-medical',
                effects: [{
                        themeAffected: 8,
                        value: 0.05
                    },
                    {
                        themeAffected: 0,
                        value: 0.05
                    },
                    {
                        themeAffected: 12,
                        value: -0.05
                    },
                    {
                        themeAffected: 3,
                        value: -0.05
                    }
                ]
            }
        ]
    },
    {
        id: 27,
        text: 'The Andromeda League has found that the inhabitants of your colony <strong>pollute</strong> a lot. We propose that you set up an <strong>"air tax"</strong> to solve this problem. What do you think of that?',
        answers: [{
                text: 'Yes, let\'s reduce pollution',
                icon: 'leaf',
                effects: [{
                        themeAffected: 3,
                        value: 0.1
                    },
                    {
                        themeAffected: 8,
                        value: 0.1
                    },
                    {
                        themeAffected: 12,
                        value: 0.1
                    },
                    {
                        themeAffected: 13,
                        value: 0.1
                    },
                    {
                        themeAffected: 0,
                        value: -0.1
                    },
                    {
                        themeAffected: 4,
                        value: -0.1
                    }
                ]
            },
            {
                text: 'No, let\'s preserve purchasing power ',
                icon: 'coins',
                effects: [{
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 4,
                        value: 0.1
                    },
                    {
                        themeAffected: 3,
                        value: -0.1
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    },
                    {
                        themeAffected: 12,
                        value: -0.1
                    },
                    {
                        themeAffected: 13,
                        value: -0.1
                    }
                ]
            }
        ]
    },
    {
        id: 28,
        text: 'You have just discovered <strong>nuclear energy</strong>. This will be of great benefit to your industries and to your homes. Would you like to use this technology?',
        answers: [{
                text: 'Yes, let\'s improve our industry',
                icon: 'industry',
                effects: [{
                        themeAffected: 9,
                        value: 0.1
                    },
                    {
                        themeAffected: 4,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: 0.05
                    },
                    {
                        themeAffected: 0,
                        value: 0.05
                    },
                    {
                        themeAffected: 7,
                        value: 0.05
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    },
                    {
                        themeAffected: 11,
                        value: -0.1
                    },
                    {
                        themeAffected: 12,
                        value: -0.1
                    }
                ]
            },
            {
                text: 'No, let\'s preserve the planet',
                icon: 'leaf',
                effects: [{
                        themeAffected: 8,
                        value: 0.1
                    },
                    {
                        themeAffected: 11,
                        value: 0.1
                    },
                    {
                        themeAffected: 12,
                        value: 0.1
                    },
                    {
                        themeAffected: 0,
                        value: -0.05
                    },
                    {
                        themeAffected: 9,
                        value: -0.05
                    },
                    {
                        themeAffected: 2,
                        value: -0.05
                    },
                    {
                        themeAffected: 7,
                        value: -0.05
                    }
                ]
            }
        ]
    },
    {
        id: 29,
        text: 'Car manufacturers are overwhelmed. The colony\'s engineers propose to <strong>build robots</strong> to help them on a daily basis. What is your answer?',
        answers: [{
                text: 'Yes, let\'s improve productivity with robots',
                icon: 'building',
                effects: [{
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 4,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 3,
                        value: 0.1
                    },
                    {
                        themeAffected: 7,
                        value: 0.1
                    },
                    {
                        themeAffected: 6,
                        value: -0.1
                    },
                    {
                        themeAffected: 12,
                        value: -0.05
                    },
                    {
                        themeAffected: 11,
                        value: -0.05
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    },
                    {
                        themeAffected: 9,
                        value: 0.1
                    }
                ]
            },
            {
                text: 'No, robotization will eliminate jobs ',
                icon: 'lightbulb',
                effects: [{
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 3,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: -0.1
                    },
                    {
                        themeAffected: 7,
                        value: -0.1
                    },
                    {
                        themeAffected: 6,
                        value: -0.1
                    }
                ]
            },
            {
                text: 'Let\'s make a compromise. 1 robot in support per team',
                icon: 'coins',
                effects: [{
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 4,
                        value: 0.05
                    },
                    {
                        themeAffected: 2,
                        value: 0.05
                    },
                    {
                        themeAffected: 7,
                        value: 0.05
                    },
                    {
                        themeAffected: 3,
                        value: 0.05
                    },
                    {
                        themeAffected: 6,
                        value: -0.05
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    },
                    {
                        themeAffected: 13,
                        value: -0.1
                    },
                    {
                        themeAffected: 12,
                        value: -0.05
                    }
                ]
            }
        ]
    },
    {
        id: 30,
        text: 'A strike broke out on the planet: factory workers are demanding more <strong>rest time</strong>. Do you think it is a good idea to <strong>reduce their working time</strong> by 2 hours per week?',
        answers: [{
                text: 'Yes, let\'s avoid risking a revolt',
                icon: 'theater-masks',
                effects: [{
                        themeAffected: 3,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 6,
                        value: 0.1
                    },
                    {
                        themeAffected: 8,
                        value: 0.1
                    },
                    {
                        themeAffected: 11,
                        value: 0.05
                    },
                    {
                        themeAffected: 7,
                        value: 0.05
                    },
                    {
                        themeAffected: 12,
                        value: 0.05
                    },
                    {
                        themeAffected: 0,
                        value: -0.05
                    }
                ]
            },
            {
                text: 'No, let us avoid creating an economic crisis',
                icon: 'industry',
                effects: [{
                        themeAffected: 4,
                        value: 0.1
                    },
                    {
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: -0.1
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    },
                    {
                        themeAffected: 11,
                        value: -0.05
                    }
                ]
            }
        ]
    },
    {
        id: 31,
        text: 'The Andromeda League noticed that the students were <strong>counterproductive</strong> in the morning between 8am and 10am. Is it a good idea to <strong>postpone the students\' classes</strong> by 2 hours during the day?',
        answers: [{
                text: 'Yes, let\'s set up computers to save time',
                icon: 'school',
                effects: [{
                        themeAffected: 4,
                        value: 0.1
                    },
                    {
                        themeAffected: 1,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 7,
                        value: 0.1
                    }
                ]
            },
            {
                text: 'No, let\'s not waste new resources on making computers',
                icon: 'briefcase-medical',
                effects: [{
                        themeAffected: 8,
                        value: -0.1
                    },
                    {
                        themeAffected: 12,
                        value: -0.1
                    }
                ]
            }
        ]
    },
    {
        id: 32,
        text: 'Students waste too much time writing with pens. <strong>Laptops</strong> have recently been proposed to replace <strong>manual writing</strong>. Do you accept?',
        answers: [{
                text: 'Yes, let\'s create computers to save time',
                icon: 'couch',
                effects: [{
                        themeAffected: 1,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 6,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: 0.05
                    },
                    {
                        themeAffected: 11,
                        value: 0.05
                    },
                    {
                        themeAffected: 7,
                        value: 0.05
                    },
                    {
                        themeAffected: 12,
                        value: 0.05
                    }
                ]
            },
            {
                text: 'No, let\'s not waste new resources',
                icon: 'tree',
                effects: [{
                        themeAffected: 4,
                        value: 0.1
                    },
                    {
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: -0.1
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    },
                    {
                        themeAffected: 11,
                        value: -0.05
                    }
                ]
            }
        ]
    },
    {
        id: 33,
        text: 'The Andromeda League has noticed that some students on your planet are having trouble getting back to school. Would you be willing to <strong>create buses</strong> for the students every morning?',
        answers: [{
                text: 'Yes, let\'s improve access to school',
                icon: 'couch',  
                effects: [{
                        themeAffected: 1,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: 0.1 
                    },
                    {
                        themeAffected: 7,
                        value: 0.1
                    },
                    {
                        themeAffected: 6,
                        value: 0.1
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    },
                    {
                        themeAffected: 12,
                        value: -0.1
                    },
                    {
                        themeAffected: 14,
                        value: -0.1
                    }
                ]
            },
            {
                text: 'No, let\'s avoid new polluting roads',
                icon: 'trash-alt',
                effects: [{
                        themeAffected: 8,
                        value: 0.1
                    },
                    {
                        themeAffected: 12,
                        value: 0.1
                    },
                    {
                        themeAffected: 14,
                        value: 0.1
                    },
                    {
                        themeAffected: 1,
                        value: -0.1
                    },
                    {
                        themeAffected: 2,
                        value: -0.1
                    },
                    {
                        themeAffected: 7,
                        value: -0.1
                    },
                    {
                        themeAffected: 6,
                        value: -0.1
                    }
                ]
            }
        ]
    },
    {
        id: 34,
        text: 'Opening a <strong>new trade route</strong> with the Star League allows you to generate more revenue. <strong>Three choices for improving</strong> your planet are available to you:',
        answers: [{
                text: 'Improving the industry',
                icon: 'coins',
                effects: [{
                        themeAffected: 4,
                        value: 0.1
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    },
                    {
                        themeAffected: 9,
                        value: 0.1
                    },
                    {
                        themeAffected: 11,
                        value: -0.1
                    },
                    {
                        themeAffected: 14,
                        value: -0.1
                    }
                ]
            },
            {
                text: 'Improving infrastructure',
                icon: 'industry',
                effects: [{
                        themeAffected: 5,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 6,
                        value: 0.1
                    },
                    {
                        themeAffected: 7,
                        value: -0.1
                    },
                    {
                        themeAffected: 8,
                        value: 0.1
                    },
                    {
                        themeAffected: 10,
                        value: -0.05
                    }
                ]
            },
            {
                text: 'Improving health',
                icon: 'briefcase-medical',
                effects: [{
                        themeAffected: 10,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 6,
                        value: 0.05
                    },
                    {
                        themeAffected: 1,
                        value: 0.05
                    },
                    {
                        themeAffected: 13,
                        value: -0.05
                    },
                    {
                        themeAffected: 14,
                        value: -0.05
                    },
                    {
                        themeAffected: 8,
                        value: -0.05
                    }
                ]
            }
        ]
    },
    {
        id: 35,
        text: '<strong>Public transport</strong> is not comfortable enough. We suggest you to implement different <strong>new features</strong> to make them more pleasant. What do you want to do?',
        answers: [{
                text: 'Do not change the seats',
                icon: 'lightbulb',
                effects: [{
                        themeAffected: 0,
                        value: 0.05
                    },
                    {
                        themeAffected: 4,
                        value: -0.05
                    },
                    {
                        themeAffected: 2,
                        value: -0.1
                    },
                    {
                        themeAffected: 6,
                        value: -0.1
                    },
                    {
                        themeAffected: 14,
                        value: 0.1
                    }
                ]
            },
            {
                text: 'Designing upholstered seats',
                icon: 'coins',
                effects: [{
                        themeAffected: 0,
                        value: 0.05
                    },
                    {
                        themeAffected: 4,
                        value: 0.05
                    },
                    {
                        themeAffected: 2,
                        value: 0.05
                    },
                    {
                        themeAffected: 7,
                        value: 0.05
                    },
                    {
                        themeAffected: 6,
                        value: 0.05
                    },
                    {
                        themeAffected: 14,
                        value: 0.05
                    },
                    {
                        themeAffected: 8,
                        value: -0.05
                    }
                ]
            },
            {
                text: 'Introduce bunk beds',
                icon: 'couch',
                effects: [{
                        themeAffected: 0,
                        value: -0.1
                    },
                    {
                        themeAffected: 4,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 7,
                        value: 0.1
                    },
                    {
                        themeAffected: 6,
                        value: 0.1
                    },
                    {
                        themeAffected: 14,
                        value: -0.1
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    }
                ]
            }
        ]
    },
    {
        id: 36,
        text: 'The population is exasperated by the number of <strong>working hours</strong>. The unions are asking the institutions to add <strong>4 days of paid leave</strong> per year. What do you decide to do?',
        answers: [{
                text: 'I accept claims to improve living comfort',
                icon: 'couch',
                effects: [{
                        themeAffected: 0,
                        value: -0.1
                    },
                    {
                        themeAffected: 4,
                        value: -0.1
                    },
                    {
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 3,
                        value: 0.1
                    },
                    {
                        themeAffected: 7,
                        value: 0.1
                    },
                    {
                        themeAffected: 6,
                        value: 0.1
                    },
                    {
                        themeAffected: 8,
                        value: 0.1
                    },
                    {
                        themeAffected: 12,
                        value: 0.1
                    }
                ]
            },
            {
                text: 'I do not accept claims to save the economy',
                icon: 'coins',
                effects: [{
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: -0.1
                    },
                    {
                        themeAffected: 7,
                        value: -0.05
                    },
                    {
                        themeAffected: 6,
                        value: -0.1
                    },
                    {
                        themeAffected: 8,
                        value: -0.05
                    },
                    {
                        themeAffected: 12,
                        value: -0.1
                    }
                ]
            }
        ]
    },
    {
        id: 37,
        text: 'A group of terrorists has just taken a group of settlers <strong>hostage</strong>. The <strong>area is difficult</strong> for your special forces <strong>to access</strong>. Which solution do you recommend?',
        answers: [{
                text: 'Ignore terrorists so as not to slow down the economy',
                icon: 'user-alt',
                effects: [{
                        themeAffected: 6,
                        value: -0.1
                    },
                    {
                        themeAffected: 7,
                        value: -0.1
                    },
                    {
                        themeAffected: 9,
                        value: 0.05
                    },
                    {
                        themeAffected: 12,
                        value: 0.05
                    }
                ]
            },
            {
                text: 'Negotiating with terrorists to save the hostages',
                icon: 'theater-masks',
                effects: [{
                        themeAffected: 0,
                        value: -0.1
                    },
                    {
                        themeAffected: 4,
                        value: -0.05
                    },
                    {
                        themeAffected: 6,
                        value: 0.05
                    },
                    {
                        themeAffected: 12,
                        value: 0.05
                    }
                ]
            },
            {
                text: 'Invade the area with force and eliminate terrorists',
                icon: 'user-alt',
                effects: [{
                        themeAffected: 3,
                        value: 0.05
                    },
                    {
                        themeAffected: 10,
                        value: 0.05
                    },
                    {
                        themeAffected: 0,
                        value: 0.05
                    },
                    {
                        themeAffected: 4,
                        value: 0.05
                    },
                    {
                        themeAffected: 2,
                        value: 0.05
                    },
                    {
                        themeAffected: 5,
                        value: 0.05
                    },
                    {
                        themeAffected: 7,
                        value: 0.05
                    }
                ]
            }
        ]
    },
    {
        id: 38,
        text: 'Your inhabitants are getting sicker and sicker. The creation of a <strong>drug factory</strong> would solve this problem but would require the <strong>destruction</strong> of 5000 trees. Do you agree with that?',
        answers: [{
                text: 'Yes, let\'s make a drug factory',
                icon: 'briefcase-medical',
                effects: [{
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 4,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: 0.05
                    },
                    {
                        themeAffected: 3,
                        value: 0.1
                    },
                    {
                        themeAffected: 8,
                        value: 0.1
                    },
                    {
                        themeAffected: 14,
                        value: -0.1
                    },
                    {
                        themeAffected: 12,
                        value: -0.1
                    },
                    {
                        themeAffected: 10,
                        value: -0.1
                    }
                ]
            },
            {
                text: 'No, let\'s save the trees',
                icon: 'leaf',
                effects: [{
                        themeAffected: 0,
                        value: -0.1
                    },
                    {
                        themeAffected: 4,
                        value: -0.05
                    },
                    {
                        themeAffected: 2,
                        value: -0.1
                    },
                    {
                        themeAffected: 3,
                        value: -0.1
                    },
                    {
                        themeAffected: 14,
                        value: 0.1
                    },
                    {
                        themeAffected: 12,
                        value: 0.1
                    },
                    {
                        themeAffected: 10,
                        value: 0.1
                    }
                ]
            }  
        ]
    },
    {
        id: 39,
        text: 'The Andromeda League and the Ministry of Health are short of money. <strong>Eliminating Health Insurance</strong> is one of the solutions proposed to achieve <strong>savings</strong>. Do you accept?',
        answers: [{
                text: 'I accept the deletion to save money',
                icon: 'coins',
                effects: [{
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: -0.1
                    },
                    {
                        themeAffected: 3,
                        value: -0.1
                    },
                    {
                        themeAffected: 7,
                        value: -0.05
                    }
                ]
            },
            {
                text: 'I refuse. Health comes first and foremost',
                icon: 'briefcase-medical',
                effects: [{
                        themeAffected: 0,
                        value: -0.1
                    },
                    {
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 3,
                        value: 0.1
                    },
                    {
                        themeAffected: 7,
                        value: 0.5
                    }
                ]
            }  
        ]
    },
    {
        id: 40,
        text: 'Your colony <strong>lacks energy</strong>. Do you want to install solar panels on your planet to <strong>collect more</strong> of this resource?',
        answers: [{
                text: 'No, there will be no installation',
                icon: 'industry',
                effects: [{
                        themeAffected: 0,
                        value: -0.05
                    },
                    {
                        themeAffected: 4,
                        value: -0.1
                    },
                    {
                        themeAffected: 7,
                        value: -0.05
                    },
                    {
                        themeAffected: 12,
                        value: 0.05
                    }
                ]
            },
            {
                text: 'Install panels on 50% of the planet',
                icon: 'bolt',
                effects: [{
                        themeAffected: 0,
                        value: 0.05
                    },
                    {
                        themeAffected: 4,
                        value: 0.05
                    },
                    {
                        themeAffected: 8,
                        value: 0.05
                    },
                    {
                        themeAffected: 9,
                        value: 0.05
                    },
                    {
                        themeAffected: 13,
                        value: 0.05
                    },
                    {
                        themeAffected: 7,
                        value: 0.05
                    }
                ]
            },
            {
                text: 'Install panels all over the planet',
                icon: 'coins',
                effects: [{
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 4,
                        value: 0.1
                    },
                    {
                        themeAffected: 8,
                        value: 0.1
                    },
                    {
                        themeAffected: 9,
                        value: 0.1
                    },
                    {
                        themeAffected: 13,
                        value: 0.05
                    },
                    {
                        themeAffected: 7,
                        value: 0.1
                    }
                ]
            }
        ]
    },
    {
        id: 41,
        text: 'Your colony wants to build walls to delimit the <strong>boundaries</strong> between each ethnic group. Thanks to customs, it would then be possible to <strong>charge for travel</strong> in these areas. Are you for or against?',
        answers: [{
                text: 'For the establishment of borders',
                icon: 'user-alt',
                effects: [{
                        themeAffected: 0,
                        value: -0.1
                    },
                    {
                        themeAffected: 4,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 10,
                        value: -0.1
                    },
                    {
                        themeAffected: 14,
                        value: -0.1
                    }
                ]
            },
            {
                text: 'Against the establishment of borders',
                icon: 'theater-masks',
                effects: [{
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 4,
                        value: -0.1
                    },
                    {
                        themeAffected: 2,
                        value: -0.1
                    },
                    {
                        themeAffected: 10,
                        value: 0.1
                    },
                    {
                        themeAffected: 14,
                        value: 0.1
                    }
                ]
            }  
        ]
    },
    {
        id: 42,
        text: 'The transatlantic and oceanic lines cannot <strong>communicate</strong>. The construction of an airport would link the two federations and promote trade. What are you doing? What are you doing?',
        answers: [{
                text: 'I am building an airport to promote trade',
                icon: 'coins',
                effects: [{
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 4,
                        value: 0.1
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    },
                    {
                        themeAffected: 11,
                        value: -0.1
                    },
                    {
                        themeAffected: 12,
                        value: -0.1
                    },
                    {
                        themeAffected: 13,
                        value: 0.1
                    },
                    {
                        themeAffected: 14,
                        value: -0.1
                    }
                ]
            },
            {
                text: 'I refuse, it\'s not an urgent need',
                icon: 'truck-loading',
                effects: [{
                        themeAffected: 0,
                        value: -0.1
                    },
                    {
                        themeAffected: 4,
                        value: -0.1
                    },
                    {
                        themeAffected: 8,
                        value: 0.1
                    },
                    {
                        themeAffected: 11,
                        value: 0.1
                    },
                    {
                        themeAffected: 12,
                        value: 0.1
                    },
                    {
                        themeAffected: 13,
                        value: -0.1
                    },
                    {
                        themeAffected: 14,
                        value: 0.1
                    }
                ]
            }  
        ]
    },
    {
        id: 43,
        text: 'A team of researchers wants to explore the underwater world. They are looking at whether it would be possible to create an <strong>underwater city</strong>. Do you agree to finance the expedition?',
        answers: [{
                text: 'I accept, we must solve the problems of overcrowding',
                icon: 'user-alt',
                effects: [{
                        themeAffected: 7,
                        value: 0.1
                    },
                    {
                        themeAffected: 12,
                        value: -0.1
                    },
                    {
                        themeAffected: 11,
                        value: -0.1
                    },
                    {
                        themeAffected: 10,
                        value: -0.05
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    },
                    {
                        themeAffected: 13,
                        value: 0.05
                    }
                    
                ]
            },
            {
                text: 'I refuse, it\'s not an urgent need',
                icon: 'water',
                effects: [{
                        themeAffected: 7,
                        value: -0.1
                    },
                    {
                        themeAffected: 0,
                        value: 0.05
                    },
                    {
                        themeAffected: 8,
                        value: 0.1
                    },
                    {
                        themeAffected: 11,
                        value: 0.1
                    }
                ]
            }  
        ]
    },
    {
        id: 44,
        text: 'You are given the opportunity to <strong>build</strong> a high-performance wind antenna, which would <strong>eliminate</strong> the need to pay for electricity. Do you accept?',
        answers: [{
                text: 'Yes, let\'s save electricity',
                icon: 'bolt',
                effects: [{
                        themeAffected: 2,
                        value: -0.1
                    },
                    {
                        themeAffected: 14,
                        value: -0.05
                    },
                    {
                        themeAffected: 8,
                        value: 0.1
                    }
                ]
            },
            {
                text: 'No, let\'s not reduce the comfort of life',
                icon: 'couch',
                effects: [{
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 14,
                        value: 0.05
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    }
                ]
            }  
        ]
    },
    {
        id: 45,
        text: 'The Andromeda League proposes to create <strong>phones without entertainment applications</strong>. The idea would be to be able to <strong>improve</strong> the concentration of employees in the office. What do you think of that?',
        answers: [{
                text: 'Yes, let\'s improve labour productivity',
                icon: 'theater-masks',
                effects: [{
                        themeAffected: 0,
                        value: 0.05
                    },
                    {
                        themeAffected: 1,
                        value: 0.05
                    },
                    {
                        themeAffected: 7,
                        value: 0.05
                    },
                    {
                        themeAffected: 2,
                        value: -0.05
                    },
                    {
                        themeAffected: 6,
                        value: -0.1
                    }
                ]
            },
            {
                text: 'No, let\'s not cause a social crisis',
                icon: 'couch',
                effects: [{
                        themeAffected: 0,
                        value: -0.05
                    },
                    {
                        themeAffected: 1,
                        value: -0.05
                    },
                    {
                        themeAffected: 7,
                        value: -0.05
                    },
                    {
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 6,
                        value: 0.05
                    }
                ]
            }  
        ]
    },
    {
        id: 46,
        text: 'Due to recent demonstrations, the authorities are proposing to <strong>increase people\'s salaries</strong> by 10%. In return, employees <strong>will have to work 5 more hours</strong> per week. Do you accept?',
        answers: [{
                text: 'Yes, let\'s make a compromise.',
                icon: 'coins',
                effects: [{
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 4,
                        value: 0.1
                    },
                    {
                        themeAffected: 1,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: -0.1
                    },
                    {
                        themeAffected: 3,
                        value: -0.1
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    }
                ]
            },
            {
                text: 'No, the compromise is not balanced',
                icon: 'couch',
                effects: [{
                        themeAffected: 0,
                        value: -0.1
                    },
                    {
                        themeAffected: 4,
                        value: -0.1
                    },
                    {
                        themeAffected: 1,
                        value: -0.1
                    },
                    {
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 3,
                        value: 0.1
                    },
                    {
                        themeAffected: 8,
                        value: 0.1
                    }
                ]
            }  
        ]
    },
    {
        id: 47,
        text: 'We propose that you build an airport to <strong>improve traffic flow</strong>. On the other hand, 20% of the population would be disturbed by <strong>construction work</strong>. Which solution does it seem most appropriate to you?',
        answers: [{
                text: 'Do not build the airport. The inhabitants will not be disturbed',
                icon: 'couch',
                effects: [{
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 4,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 5,
                        value: 0.1
                    },
                    {
                        themeAffected: 7,
                        value: 0.1
                    },
                    {
                        themeAffected: 6,
                        value: 0.1
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    },
                    {
                        themeAffected: 12,
                        value: -0.1
                    },
                    {
                        themeAffected: 14,
                        value: -0.1
                    }
                ]
            },
            {
                text: 'Build the airport very quickly, but with a lot of resources',
                icon: 'coins',
                effects: [{
                        themeAffected: 0,
                        value: -0.1
                    },
                    {
                        themeAffected: 4,
                        value: -0.1
                    },
                    {
                        themeAffected: 2,
                        value: -0.1
                    },
                    {
                        themeAffected: 5,
                        value: -0.1
                    },
                    {
                        themeAffected: 7,
                        value: -0.1
                    },
                    {
                        themeAffected: 6,
                        value: -0.1
                    },
                    {
                        themeAffected: 8,
                        value: 0.1
                    },
                    {
                        themeAffected: 12,
                        value: 0.1
                    },
                    {
                        themeAffected: 14,
                        value: 0.1
                    }
                ]
            }  
        ]
    },
    {
        id: 48,
        text: 'The <strong>satisfaction level</strong> of the people living on your planet is not high enough. Do you think that the construction of an <strong>amusement park</strong> could solve this problem?',
        answers: [{
                text: 'Yes, it would help to satisfy public order',
                icon: 'theater-masks',
                effects: [{
                        themeAffected: 0,
                        value: -0.1
                    },
                    {
                        themeAffected: 4,
                        value: -0.1
                    },
                    {
                        themeAffected: 2,
                        value: -0.1
                    },
                    {
                        themeAffected: 5,
                        value: -0.1
                    },
                    {
                        themeAffected: 10,
                        value: 0.1
                    },
                    {
                        themeAffected: 11,
                        value: 0.1
                    },
                    {
                        themeAffected: 7,
                        value: -0.05
                    }
                ]
            },
            {
                text: 'No, it will bring down the economy',
                icon: 'coins',
                effects: [{
                        themeAffected: 0,
                        value: -0.05
                    },
                    {
                        themeAffected: 4,
                        value: -0.1
                    },
                    {
                        themeAffected: 2,
                        value: -0.1
                    },
                    {
                        themeAffected: 5,
                        value: -0.05
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    },
                    {
                        themeAffected: 13,
                        value: -0.1
                    },
                    {
                        themeAffected: 10,
                        value: 0.1
                    },
                    {
                        themeAffected: 14,
                        value: 0.05
                    },
                    {
                        themeAffected: 2,
                        value: 0.1
                    }
                ]
            }  
        ]
    },
    {
        id: 49,
        text: 'The Andromeda League has received <strong>surplus</strong> financial assistance. It gives you the <strong>possibility</strong> to use these funds for your own colony or not to accept them.',
        answers: [{
                text: 'I agree, it will help the colony',
                icon: 'coins',
                effects: [{
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 4,
                        value: 0.1
                    },
                    {
                        themeAffected: 3,
                        value: -0.1
                    },
                    {
                        themeAffected: 8,
                        value: -0.05
                    },
                    {
                        themeAffected: 14,
                        value: -0.05
                    },
                    {
                        themeAffected: 10,
                        value: -0.05
                    }
                ]
            },
            {
                text: 'No, pollution will increase if we invest more in industry',
                icon: 'industry',
                effects: [{
                        themeAffected: 8,
                        value: 0.05
                    },
                    {
                        themeAffected: 14,
                        value: 0.05
                    },
                    {
                        themeAffected: 10,
                        value: 0.05
                    },
                    {
                        themeAffected: 0,
                        value: -0.1
                    },
                    {
                        themeAffected: 4,
                        value: -0.1
                    }
                ]
            }
        ]

    },
    {
        id: 50,
        text: 'You have the <strong>possibility</strong> to create a virtual cryptocurrency: this would speed up financial exchanges. What do you decide?',
        answers: [{
                text: 'I authorize the creation of cryptocurrency',
                icon: 'coins',
                effects: [{
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 7,
                        value: 0.1
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    },
                    {
                        themeAffected: 13,
                        value: -0.05
                    }
                ]
            },
            {
                text: 'I do not authorize the creation of cryptocurrency ',
                icon: 'lightbulb',
                effects: [{
                        themeAffected: 8,
                        value: 0.1
                    },
                    {
                        themeAffected: 13,
                        value: 0.1
                    },
                    {
                        themeAffected: 0,
                        value: -0.1
                    },
                    {
                        themeAffected: 7,
                        value: -0.1
                    }
                ]
            }
        ]
    },
    {
        id: 51,
        text: 'You have the option of implementing an <strong>algorithm</strong> that would prevent people from cheating when they report their <strong>income</strong>. Do you authorize its creation?',
        answers: [{
                text: 'Yes, it will improve the economy',
                icon: 'coins',
                effects: [{
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 7,
                        value: 0.1
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    },
                    {
                        themeAffected: 9,
                        value: -0.1
                    },
                    {
                        themeAffected: 12,
                        value: -0.1
                    }
                ]
            },
            {
                text: 'No, it will pollute the planet more',
                icon: 'trash-alt',
                effects: [{
                        themeAffected: 8,
                        value: 0.1
                    },
                    {
                        themeAffected: 9,
                        value: 0.1
                    },
                    {
                        themeAffected: 12,
                        value: 0.1
                    },
                    {
                        themeAffected: 0,
                        value: -0.1
                    },
                    {
                        themeAffected: 7,
                        value: -0.1
                    }
                ]
            }
        ]
    },
    {
        id: 52,
        text: 'X-ZTY cars have just been introduced. Their release could be <strong>beneficial</strong> to your colony\'s trade, but it would also bring several <strong>disadvantages</strong>. What do you choose?',
        answers: [{
                text: 'sell X-ZTY cars',
                icon: 'lightbulb',
                effects: [{
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 7,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 4,
                        value: 0.1
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    },
                    {
                        themeAffected: 9,
                        value: -0.05
                    },
                    {
                        themeAffected: 13,
                        value: -0.05
                    }
                ]
            },
            {
                text: 'Do not sell X-ZTY cars',
                icon: 'leaf',
                effects: [{
                        themeAffected: 12,
                        value: 0.1
                    },
                    {
                        themeAffected: 8,
                        value: 0.1
                    },
                    {
                        themeAffected: 13,
                        value: 0.1
                    },
                    {
                        themeAffected: 14,
                        value: 0.05
                    },
                    {
                        themeAffected: 9,
                        value: 0.05
                    },
                    {
                        themeAffected: 0,
                        value: -0.1
                    },
                    {
                        themeAffected: 7,
                        value: -0.1
                    },
                    {
                        themeAffected: 6,
                        value: -0.05
                    },
                    {
                        themeAffected: 2,
                        value: -0.05
                    }
                ]
            }
        ]
    },
    {
        id: 53,
        text: 'Technical failures have recently affected the majority of your plants. You must therefore <strong>find a solution</strong> as soon as possible to save global production. What do you choose?',
        answers: [{
                text: 'I\'m increasing the workers\' wages',
                icon: 'couch',
                effects: [{
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 6,
                        value: 0.1
                    },
                    {
                        themeAffected: 3,
                        value: 0.1
                    },
                    {
                        themeAffected: 0,
                        value: 0.05
                    },
                    {
                        themeAffected: 9,
                        value: -0.1
                    },
                    {
                        themeAffected: 4,
                        value: -0.1
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    }
                ]
            },
            {
                text: 'I ask for help from the banks of the Andromeda League',
                icon: 'coins',
                effects: [{
                        themeAffected: 6,
                        value: 0.1
                    },
                    {
                        themeAffected: 4,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 3,
                        value: 0.1
                    },
                    {
                        themeAffected: 9,
                        value: -0.1
                    },
                    {
                        themeAffected: 5,
                        value: -0.1
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    },
                    {
                        themeAffected: 0,
                        value: -0.1
                    }
                ]
            },
            {
                text: 'I make layoffs to save the economy',
                icon: 'theater-masks',
                effects: [{
                        themeAffected: 8,
                        value: 0.1
                    },
                    {
                        themeAffected: 0,
                        value: 0.05
                    },
                    {
                        themeAffected: 3,
                        value: -0.1
                    },
                    {
                        themeAffected: 2,
                        value: -0.1
                    },
                    {
                        themeAffected: 5,
                        value: -0.1
                    },
                    {
                        themeAffected: 4,
                        value: -0.05
                    }
                ]
            }
        ]
    },
    {
        id: 54,
        text: 'Flying cars in your colony tend <strong>to slow down</strong> too much at tolls. We suggest that you install an automatic <strong>controller</strong> to make traffic flow more smoothly. What do you think of that?',
        answers: [{
                text: 'Yes, it will only bring advantages',
                icon: 'coins',
                effects: [{
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 7,
                        value: 0.1
                    },
                    {
                        themeAffected: 8,
                        value: 0.1
                    },
                    {
                        themeAffected: 4,
                        value: 0.05
                    },
                    {
                        themeAffected: 6,
                        value: 0.05
                    },
                    {
                        themeAffected: 10,
                        value: 0.05
                    },
                    {
                        themeAffected: 14,
                        value: 0.05
                    }
                ]
            },
            {
                text: 'No, pollution will increase otherwise',
                icon: 'trash-alt',
                effects: [{
                        themeAffected: 0,
                        value: -0.1
                    },
                    {
                        themeAffected: 7,
                        value: -0.1
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    },
                    {
                        themeAffected: 4,
                        value: -0.05
                    },
                    {
                        themeAffected: 6,
                        value: -0.05
                    },
                    {
                        themeAffected: 10,
                        value: -0.05
                    },
                    {
                        themeAffected: 14,
                        value: -0.05
                    }
                ]
            }
        ]
    },
    {
        id: 55,
        text: 'The Andromeda League wants to <strong>revive education</strong> on the planet. Several proposals for improvement are proposed, such as the <strong>robotization</strong> of teaching. What are you doing? What are you doing?',
        answers: [{
                text: 'Accept the proposal to promote education',
                icon: 'school',
                effects: [{
                        themeAffected: 1,
                        value: 0.1
                    },
                    {
                        themeAffected: 7,
                        value: 0.1
                    },
                    {
                        themeAffected: 8,
                        value: -0.05
                    }
                ]
            },
            {
                text: 'Let\'s reject robotization to avoid creating more pollution',
                icon: 'lightbulb',
                effects: [{
                        themeAffected: 8,
                        value: 0.05
                    },
                    {
                        themeAffected: 7,
                        value: -0.1
                    },
                    {
                        themeAffected: 2,
                        value: -0.05
                    },
                    {
                        themeAffected: 1,
                        value: -0.05
                    }
                ]
            }
        ]
    },
    {
        id: 56,
        text: 'It is now possible to use the planet\'s <strong>energy</strong> to <strong>broadcast</strong> schoolyards live. The army is also beginning to take an interest in this technology. What do you choose to do?',
        answers: [{
                text: 'I agree with this decision, it will help education',
                icon: 'school',
                effects: [{
                        themeAffected: 1,
                        value: 0.1
                    },
                    {
                        themeAffected: 7,
                        value: 0.1
                    },
                    {
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: 0.05
                    },
                    {
                        themeAffected: 6,
                        value: 0.05
                    },
                    {
                        themeAffected: 9,
                        value: -0.1
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    },
                    {
                        themeAffected: 11,
                        value: -0.05
                    },
                    {
                        themeAffected: 12,
                        value: -0.05
                    }
                ]
            },
            {
                text: 'I refuse this decision, there will be an energy saturation otherwise',
                icon: 'bolt',
                effects: [{
                        themeAffected: 9,
                        value: 0.1
                    },
                    {
                        themeAffected: 8,
                        value: 0.1
                    },
                    {
                        themeAffected: 11,
                        value: 0.05
                    },
                    {
                        themeAffected: 12,
                        value: 0.05
                    },
                    {
                        themeAffected: 1,
                        value: -0.1
                    },
                    {
                        themeAffected: 0,
                        value: -0.1
                    },
                    {
                        themeAffected: 7,
                        value: -0.1
                    },
                    {
                        themeAffected: 2,
                        value: -0.05
                    },
                    {
                        themeAffected: 6,
                        value: -0.05
                    }
                ]
            }
        ]
    },
    {
        id: 57,
        text: 'The Ministry of Education noted that 20% of students were in <strong>academic failure</strong>. <strong>Robots to help</strong> with tutoring are available. Would you like to set up these robots?',
        answers: [{
                text: 'Yes, let us promote the education system',
                icon: 'school',
                effects: [{
                        themeAffected: 1,
                        value: 0.05
                    },
                    {
                        themeAffected: 7,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: 0.05
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    },
                    {
                        themeAffected: 13,
                        value: -0.1
                    },
                    {
                        themeAffected: 12,
                        value: -0.1
                    },
                    {
                        themeAffected: 14,
                        value: -0.1
                    }
                ]
            },
            {
                text: 'No, robot production will harm the environment',
                icon: 'leaf',
                effects: [{
                        themeAffected: 8,
                        value: 0.1
                    },
                    {
                        themeAffected: 13,
                        value: 0.1
                    },
                    {
                        themeAffected: 12,
                        value: 0.1
                    },
                    {
                        themeAffected: 7,
                        value: -0.1
                    },
                    {
                        themeAffected: 2,
                        value: -0.05
                    },
                    {
                        themeAffected: 1,
                        value: -0.05
                    }
                ]
            }
        ]
    },
    {
        id: 58,
        text: 'The Boeing3000 can travel at a <strong>blistering speed</strong> but has the disadvantage of being much more <strong>polluting</strong> than current trains. Do you authorize their commercialization?',
        answers: [{
                text: 'I accept the production of the Boeing3000',
                icon: 'lightbulb',
                effects: [{
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 4,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 7,
                        value: 0.1
                    },
                    {
                        themeAffected: 14,
                        value: 0.05
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    },
                    {
                        themeAffected: 12,
                        value: -0.1
                    },
                    {
                        themeAffected: 13,
                        value: -0.05
                    }
                ]
            },
            {
                text: 'I do not accept the production of the Boeing3000',
                icon: 'leaf',
                effects: [{
                        themeAffected: 8,
                        value: 0.1
                    },
                    {
                        themeAffected: 12,
                        value: 0.1
                    },
                    {
                        themeAffected: 13,
                        value: 0.05
                    },
                    {
                        themeAffected: 0,
                        value: -0.1
                    },
                    {
                        themeAffected: 4,
                        value: -0.1
                    },
                    {
                        themeAffected: 2,
                        value: -0.1
                    },
                    {
                        themeAffected: 7,
                        value: -0.1
                    },
                    {
                        themeAffected: 14,
                        value: -0.05
                    }
                ]
            }
        ]
    },
    {
        id: 59,
        text: 'The phalène is an endangered animal on your planet. However, there are others in the solar system. Do you allow the <strong>extinction</strong> of the phalène on your planet?',
        answers: [{
                text: 'No, let\'s create a protected species status',
                icon: 'leaf',
                effects: [{
                        themeAffected: 12,
                        value: 0.1
                    },
                    {
                        themeAffected: 13,
                        value: 0.1
                    },
                    {
                        themeAffected: 7,
                        value: 0.05
                    },
                    {
                        themeAffected: 1,
                        value: 0.05
                    },
                    {
                        themeAffected: 10,
                        value: 0.05
                    },
                    {
                        themeAffected: 14,
                        value: 0.05
                    },
                    {
                        themeAffected: 0,
                        value: -0.1
                    },
                    {
                        themeAffected: 2,
                        value: -0.1
                    }
                ]
            },
            {
                text: 'Yes, there will always be others elsewhere',
                icon: 'tree',
                effects: [{
                        themeAffected: 7,
                        value: 0.05
                    },
                    {
                        themeAffected: 0,
                        value: 0.05
                    },
                    {
                        themeAffected: 2,
                        value: 0.05
                    },
                    {
                        themeAffected: 12,
                        value: -0.1
                    },
                    {
                        themeAffected: 13,
                        value: -0.1
                    },
                    {
                        themeAffected: 1,
                        value: -0.05
                    },
                    {
                        themeAffected: 6,
                        value: -0.05
                    },
                    {
                        themeAffected: 14,
                        value: -0.05
                    },
                    {
                        themeAffected: 10,
                        value: -0.05
                    }
                ]
            }
        ]
    },
    {
        id: 60,
        text: 'The journey between the oceanic and transatlantic line takes too long. <strong>A bridge</strong> could solve this problem, but would require a certain cost. What do you want to do?',
        answers: [{
                text: 'Yes, let\'s reduce travel time',
                icon: 'couch',
                effects: [{
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 4,
                        value: 0.1
                    },
                    {
                        themeAffected: 1,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 7,
                        value: 0.1
                    },
                    {
                        themeAffected: 6,
                        value: 0.1
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    },
                    {
                        themeAffected: 9,
                        value: -0.1
                    },
                    {
                        themeAffected: 12,
                        value: -0.1
                    }
                ]
            },
            {
                text: 'No, let\'s not reduce travel time',
                icon: 'trash-alt',
                effects: [{
                        themeAffected: 8,
                        value: 0.1
                    },
                    {
                        themeAffected: 9,
                        value: 0.1
                    },
                    {
                        themeAffected: 12,
                        value: 0.1
                    },
                    {
                        themeAffected: 0,
                        value: -0.1
                    },
                    {
                        themeAffected: 4,
                        value: -0.1
                    },
                    {
                        themeAffected: 1,
                        value: -0.1
                    },
                    {
                        themeAffected: 7,
                        value: -0.1
                    },
                    {
                        themeAffected: 6,
                        value: -0.1
                    },
                    {
                        themeAffected: 2,
                        value: -0.05
                    }
                ]
            }
        ]
    },
    {
        id: 61,
        text: 'Knowing that your planet is beginning to become overcrowded, you have the possibility of <strong>contaminating</strong> part of the population with the "lethal" <strong>bacteria</strong> to reduce the population explosion. Do you accept?',
        answers: [{
                text: 'I accept the spread of a bacterium',
                icon: 'user-alt',
                effects: [{
                        themeAffected: 14,
                        value: 0.1
                    },
                    {
                        themeAffected: 10,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: -0.1
                    },
                    {
                        themeAffected: 3,
                        value: -0.05
                    }
                ]
            },
            {
                text: 'I do not accept the spread of bacteria',
                icon: 'coins',
                effects: [{
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 3,
                        value: 0.05
                    },
                    {
                        themeAffected: 14,
                        value: -0.1
                    },
                    {
                        themeAffected: 10,
                        value: -0.1
                    }
                ]
            }
        ]
    },
    {
        id: 62,
        text: 'Scientists have found a way to <strong>revive</strong> the planet\'s ancient animal species! However, this does not please animal and religious associations, which remain opposed to this idea. What do you recommend?',
        answers: [{
                text: 'Allow the resurrection of creatures',
                icon: 'coins',
                effects: [{
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 7,
                        value: 0.1
                    },
                    {
                        themeAffected: 1,
                        value: 0.1
                    },
                    {
                        themeAffected: 12,
                        value: 0.05
                    },
                    {
                        themeAffected: 6,
                        value: -0.1
                    }
                ]
            },
            {
                text: 'Not allowing resurrection',
                icon: 'theater-masks',
                effects: [{
                        themeAffected: 6,
                        value: 0.1
                    },
                    {
                        themeAffected: 13,
                        value: 0.05
                    },
                    {
                        themeAffected: 0,
                        value: -0.1
                    },
                    {
                        themeAffected: 7,
                        value: -0.1
                    },
                    {
                        themeAffected: 1,
                        value: -0.1
                    },
                    {
                        themeAffected: 12,
                        value: -0.05
                    }
                ]
            }
        ]
    },
    {
        id: 63,
        text: 'We propose the implementation of a <strong>chip</strong> that multiplies the performance of employees by 4. However, it would have <strong>negative long-term effects</strong>. Would you like to set it up?',
        answers: [{
                text: 'Yes, work growth cannot be put aside',
                icon: 'industry',
                effects: [{
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 4,
                        value: 0.1
                    },
                    {
                        themeAffected: 7,
                        value: 0.1
                    },
                    {
                        themeAffected: 1,
                        value: 0.05
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    },
                    {
                        themeAffected: 10,
                        value: -0.1
                    },
                    {
                        themeAffected: 12,
                        value: -0.1
                    },
                    {
                        themeAffected: 3,
                        value: -0.1
                    },
                    {
                        themeAffected: 6,
                        value: -0.1
                    }
                ]
            },
            {
                text: 'No, let\'s avoid creating more social conflicts',
                icon: 'theater-masks',
                effects: [{
                        themeAffected: 8,
                        value: 0.1
                    },
                    {
                        themeAffected: 10,
                        value: 0.05
                    },
                    {
                        themeAffected: 12,
                        value: 0.1
                    },
                    {
                        themeAffected: 3,
                        value: 0.1
                    },
                    {
                        themeAffected: 6,
                        value: 0.1
                    },
                    {
                        themeAffected: 0,
                        value: -0.1
                    },
                    {
                        themeAffected: 4,
                        value: -0.1
                    },
                    {
                        themeAffected: 7,
                        value: -0.1
                    },
                    {
                        themeAffected: 1,
                        value: -0.05
                    }
                ]
            }
        ]
    },
    {
        id: 64,
        text: 'You have the possibility to create a "<strong>LoopH</strong>" supersonic train that will allow your population to move <strong>much faster</strong> and therefore save time. Do you authorize its creation?',
        answers: [{
                text: 'I agree to the train being put into service',
                icon: 'couch',
                effects: [{
                        themeAffected: 3,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    },
                    {
                        themeAffected: 14,
                        value: -0.1
                    },
                    {
                        themeAffected: 12,
                        value: -0.1
                    }
                ]
            },
            {
                text: 'I do not accept the train to be put into service',
                icon: 'truck-loading',
                effects: [{
                        themeAffected: 8,
                        value: 0.1
                    },
                    {
                        themeAffected: 14,
                        value: 0.1
                    },
                    {
                        themeAffected: 12,
                        value: 0.1
                    },
                    {
                        themeAffected: 3,
                        value: -0.1
                    },
                    {
                        themeAffected: 2,
                        value: -0.1
                    },
                    {
                        themeAffected: 0,
                        value: -0.1
                    }
                ]
            }
        ]
    },
    {
        id: 65,
        text: 'Following new waves of <strong>migration</strong>, you discover that you cannot <strong>accommodate</strong> all the new settlers on your planet. What to do about it?',
        answers: [{
                text: 'Place half of the colony in low-cost prefabricated buildings',
                icon: 'couch',
                effects: [{
                        themeAffected: 7,
                        value: 0.05
                    },
                    {
                        themeAffected: 14,
                        value: -0.1
                    },
                    {
                        themeAffected: 5,
                        value: -0.1
                    },
                    {
                        themeAffected: 2,
                        value: -0.05
                    },
                    {
                        themeAffected: 12,
                        value: -0.05
                    },
                    {
                        themeAffected: 3,
                        value: -0.05
                    }
                ]
            },
            {
                text: 'Ensure that the entire population is housed',
                icon: 'building',
                effects: [{
                        themeAffected: 6,
                        value: 0.1
                    },
                    {
                        themeAffected: 11,
                        value: 0.1
                    },
                    {
                        themeAffected: 5,
                        value: 0.05
                    },
                    {
                        themeAffected: 10,
                        value: 0.05
                    },
                    {
                        themeAffected: 2,
                        value: 0.05
                    },
                    {
                        themeAffected: 3,
                        value: 0.05
                    },
                    {
                        themeAffected: 13,
                        value: -0.1
                    },
                    {
                        themeAffected: 14,
                        value: -0.1
                    },
                    {
                        themeAffected: 0,
                        value: 0.1
                    }
                ]
            }
        ]
    },
    {
        id: 66,
        text: 'The Andromeda League wishes to entertain its inhabitants by building a 7D cinema. This construction will be very <strong>expensive</strong> but will generate <strong>benefits</strong>. Do you think that\'s a good idea?',
        answers: [{
                text: 'Yes, let\'s improve the comfort of the population',
                icon: 'couch',
                effects: [{
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 4,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 5,
                        value: 0.1
                    },
                    {
                        themeAffected: 7,
                        value: 0.1
                    },
                    {
                        themeAffected: 6,
                        value: 0.1
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    },
                    {
                        themeAffected: 10,
                        value: -0.1
                    },
                    {
                        themeAffected: 13,
                        value: -0.1
                    },
                    {
                        themeAffected: 14,
                        value: -0.1
                    }
                ]
            },
            {
                text: 'No, let\'s avoid consuming new resources',
                icon: 'industry',
                effects: [{
                        themeAffected: 8,
                        value: 0.1
                    },
                    {
                        themeAffected: 9,
                        value: 0.1
                    },
                    {
                        themeAffected: 10,
                        value: 0.1
                    },
                    {
                        themeAffected: 13,
                        value: 0.1
                    },
                    {
                        themeAffected: 14,
                        value: 0.1
                    },
                    {
                        themeAffected: 0,
                        value: -0.1
                    },
                    {
                        themeAffected: 4,
                        value: -0.1
                    },
                    {
                        themeAffected: 7,
                        value: -0.1
                    },
                    {
                        themeAffected: 6,
                        value: -0.1
                    },
                    {
                        themeAffected: 2,
                        value: -0.05
                    },
                    {
                        themeAffected: 5,
                        value: -0.05
                    }
                ]
            }
        ]
    },
    {
        id: 67,
        text: 'A new teleportation technology has just been <strong>invented</strong>. You have enough money to buy the license and <strong>market it</strong> to make it easier for your settlers to move around. Do you accept?',
        answers: [{
                text: 'I accept, it will improve the comfort of life',
                icon: 'couch',
                effects: [{
                        themeAffected: 7,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 3,
                        value: -0.1
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    },
                    {
                        themeAffected: 9,
                        value: -0.1
                    }
                ]
            },
            {
                text: 'No, we don\'t know if this technology is reliable',
                icon: 'lightbulb',
                effects: [{
                        themeAffected: 7,
                        value: -0.1
                    },
                    {
                        themeAffected: 2,
                        value: -0.1
                    },
                    {
                        themeAffected: 3,
                        value: 0.1
                    },
                    {
                        themeAffected: 9,
                        value: 0.1
                    },
                    {
                        themeAffected: 8,
                        value: 0.1
                    }
                ]
            }
        ]
    },
    {
        id: 68,
        text: 'The "<strong>anthropomorphium</strong>" pill makes it possible to transform <strong>humans</strong> into <strong>trees</strong>. Environmental institutions would be delighted to be able to allow the planet to breathe more. Are you interested?',
        answers: [{
                text: 'Yes, it will help the environment',
                icon: 'leaf',
                effects: [{
                        themeAffected: 14,
                        value: 0.05
                    },
                    {
                        themeAffected: 12,
                        value: 0.05
                    },
                    {
                        themeAffected: 8,
                        value: 0.05
                    }
                ]
            },
            {
                text: 'No, it will create conflicts',
                icon: 'user-alt',
                effects: [{
                        themeAffected: 14,
                        value: -0.05
                    },
                    {
                        themeAffected: 12,
                        value: -0.05
                    },
                    {
                        themeAffected: 10,
                        value: 0.05
                    }
                ]
            }
        ]
    },
    {
        id: 69,
        text: 'Artificial intelligence is at its peak. We propose to <strong>replace</strong> 20% of the population with high-performance robots. Do you accept?',
        answers: [{
                text: 'Yes, it will increase productivity',
                icon: 'industry',
                effects: [{
                        themeAffected: 7,
                        value: 0.1
                    },
                    {
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 3,
                        value: 0.1
                    },
                    {
                        themeAffected: 4,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 6,
                        value: -0.1
                    },
                    {
                        themeAffected: 10,
                        value: -0.1
                    },
                    {
                        themeAffected: 9,
                        value: -0.1
                    }
                ]
            },
            {
                text: 'No, let us preserve existing jobs',
                icon: 'theater-masks',
                effects: [{
                        themeAffected: 6,
                        value: 0.1
                    },
                    {
                        themeAffected: 10,
                        value: 0.1
                    },
                    {
                        themeAffected: 9,
                        value: 0.1
                    },
                    {
                        themeAffected: 14,
                        value: 0.05
                    },
                    {
                        themeAffected: 7,
                        value: -0.1
                    },
                    {
                        themeAffected: 0,
                        value: -0.05
                    },
                    {
                        themeAffected: 3,
                        value: -0.1
                    },
                    {
                        themeAffected: 4,
                        value: -0.1
                    },
                    {
                        themeAffected: 2,
                        value: -0.1
                    }
                ]
            }
        ]
    },
    {
        id: 70,
        text: 'We propose you to create drones that would allow you to <strong>send packages</strong> at a light speed. On the other hand, their production would consume <strong>a lot of energy</strong>. Do you think that\'s a good idea?',
        answers: [{
                text: 'I accept, it will improve everyone\'s comfort',
                icon: 'lightbulb',
                effects: [{
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    },
                    {
                        themeAffected: 14,
                        value: -0.05
                    }
                ]
            },
            {
                text: 'I refuse, it will consume a lot of energy',
                icon: 'bolt',
                effects: [{
                        themeAffected: 8,
                        value: 0.1
                    },
                    {
                        themeAffected: 14,
                        value: 0.05
                    },
                    {
                        themeAffected: 0,
                        value: -0.1
                    },
                    {
                        themeAffected: 2,
                        value: -0.1
                    }
                ]
            }
        ]
    },
    {
        id: 71,
        text: 'A new <strong>drug</strong> that has arrived on your planet has aroused the <strong>interest</strong> of the population but also the <strong>mistrust</strong> of health institutes. The police want to take it, but they don\'t have enough money. What answer do you give them?',
        answers: [{
                text: 'I\'m developing the police budget',
                icon: 'briefcase-medical',
                effects: [{
                        themeAffected: 0,
                        value: -0.1
                    },
                    {
                        themeAffected: 2,
                        value: -0.1
                    },
                    {
                        themeAffected: 6,
                        value: -0.1
                    },
                    {
                        themeAffected: 4,
                        value: 0.05
                    },
                    {
                        themeAffected: 7,
                        value: 0.05
                    },
                    {
                        themeAffected: 1,
                        value: 0.1
                    },
                    {
                        themeAffected: 3,
                        value: 0.1
                    }
                ]
            },
            {
                text: 'I only intervene if studies show that this drug is destructive',
                icon: 'industry',
                effects: [{
                        themeAffected: 0,
                        value: 0.05
                    },
                    {
                        themeAffected: 2,
                        value: 0.05
                    },
                    {
                        themeAffected: 6,
                        value: 0.05
                    },
                    {
                        themeAffected: 4,
                        value: -0.05
                    },
                    {
                        themeAffected: 1,
                        value: -0.05
                    },
                    {
                        themeAffected: 7,
                        value: -0.05
                    },
                    {
                        themeAffected: 3,
                        value: -0.05
                    }
                ]
            },
            {
                text: 'I\'m not doing anything, because the population appreciates it and the economy is doing well',
                icon: 'couch',
                effects: [{
                        themeAffected: 0,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 6,
                        value: 0.1
                    },
                    {
                        themeAffected: 4,
                        value: -0.05
                    },
                    {
                        themeAffected: 7,
                        value: -0.05
                    },
                    {
                        themeAffected: 1,
                        value: -0.1
                    },
                    {
                        themeAffected: 3,
                        value: -0.1
                    }
                ]
            }
        ]
    },
    {
        id: 72,
        text: 'A <strong>war</strong> has just broken out between the two most powerful countries on your planet. The inhabitants are no longer safe. The Andromeda League is trying to <strong>resolve</strong> this situation and is asking you to take action. What do you decide?',
        answers: [{
                text: 'I ask the army of the Andromeda League to intervene',
                icon: 'theater-masks',
                effects: [{
                        themeAffected: 0,
                        value: -0.1
                    },
                    {
                        themeAffected: 6,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: 0.1
                    },
                    {
                        themeAffected: 10,
                        value: -0.1
                    }
                ]
            },
            {
                text: 'I launch a nuclear attack',
                icon: 'leaf',
                effects: [{
                        themeAffected: 10,
                        value: -0.1
                    },
                    {
                        themeAffected: 6,
                        value: -0.1
                    },
                    {
                        themeAffected: 3,
                        value: -0.1
                    },
                    {
                        themeAffected: 2,
                        value: -0.1
                    },
                    {
                        themeAffected: 5,
                        value: -0.1
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    },
                    {
                        themeAffected: 13,
                        value: -0.1
                    },
                    {
                        themeAffected: 12,
                        value: -0.1
                    },
                    {
                        themeAffected: 0,
                        value: 0.1
                    }
                ]
            },
            {
                text: 'I\'m organizing a massive exodus for the population',
                icon: 'user-alt',
                effects: [{
                        themeAffected: 10,
                        value: 0.1
                    },
                    {
                        themeAffected: 6,
                        value: 0.1
                    },
                    {
                        themeAffected: 0,
                        value: -0.1
                    },
                    {
                        themeAffected: 9,
                        value: -0.1
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    }
                ]
            }
        ]
    },
    {
        id: 73,
        text: 'The <strong>teleportation</strong> has just arrived on the market. However, this technology remains very <strong>expensive</strong> and is only accessible to a small part of the population. Do you want to put it in place?',
        answers: [{
                text: 'Yes, society will benefit greatly from it',
                icon: 'coins',
                effects: [{
                        themeAffected: 0,
                        value: 0.05
                    },
                    {
                        themeAffected: 4,
                        value: 0.05
                    },
                    {
                        themeAffected: 2,
                        value: 0.05
                    },
                    {
                        themeAffected: 6,
                        value: -0.1
                    },
                    {
                        themeAffected: 8,
                        value: -0.1
                    },
                    {
                        themeAffected: 9,
                        value: -0.1
                    }
                ]
            },
            {
                text: 'No, it will still cost money',
                icon: 'theater-masks',
                effects: [{
                        themeAffected: 0,
                        value: -0.05
                    },
                    {
                        themeAffected: 4,
                        value: -0.05
                    },
                    {
                        themeAffected: 6,
                        value: 0.1
                    },
                    {
                        themeAffected: 8,
                        value: 0.1
                    },
                    {
                        themeAffected: 9,
                        value: 0.1
                    },
                    {
                        themeAffected: 2,
                        value: -0.05
                    }
                ]
            }
        ]
    }
]
