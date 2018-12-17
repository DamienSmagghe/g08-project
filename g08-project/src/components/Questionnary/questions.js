export const questions = [
    {
        id: 0,
        text: 'The slow and uneven progress of our trade has meant that we need to review and reorganize our economic and social policies. What new policy do you want to apply?',
        answers: [{
                text: 'Making our children work',
                icon: 'coffee',
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
        text: 'You benefit from green spaces (plain, forest, etc.) not yet used. You can use it to increase the following areas: agriculture, industry, entertainment. Which area do you think is most suitable?',
        answers: [{
                text: 'Agriculture. Resources need to be improved',
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
        text: 'Inequalities between inhabitants are increasing. You have the opportunity to equalize all salaries, but at your own risk. What do you choose?',
        answers: [{
                text: 'Let\'s be fair and give everyone the same salary',
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
        text: 'Animal meat is highly valued by the population. What is the maximum amount of meat per person that you allow?',
        answers: [{
                text: 'No pieces of meat',
                effects: [{
                        themeAffected: 8,
                        value: -0.1
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
        text: 'Following several reforms that were unfavourable to them, workers all over the world went on strike. As a result, your colony\'s industry is paralyzed. What answer do you choose to provide?',
        answers: [{
                text: 'Yield to workers\' demands',
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
        text: 'Following a serious accident in an agri-food industry, you are in charge of closing the company or starting from scratch (or risk losing a lot of money). What are you doing? What are you doing?',
        answers: [{
                text: 'Close the company. It was already polluting a lot.',
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
        text: 'Working with experts in their field is a plus on your new planet, because you can build great things very quickly. Your engineers have suggested using arcanite to improve production at the various sites. It is a polluting but very effective material. What do you decide?',
        answers: [{
                text: 'Yes, let\'s improve the industry',
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
        text: 'You are in need of producing more books to strengthen your colony\'s education. In return, you have to destroy 40,000 trees to produce paper. What do you decide?',
        answers: [{
                text: 'Let us preserve the forest, let us not destroy the trees',
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
        text: 'Teachers in your colony are thinking about creating a new subject that would explain the importance of industrial trades. This would further encourage work at the plant at the end of the studies. What do you think of that?',
        answers: [{
                text: 'Yes, let\'s encourage industrial work',
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
        text: 'For a country and its people to develop, it is imperative to invest in and strengthen the education sector. Without investment in quality education, not all other development indicators will progress. Do you agree to give less budget to industries but more to the education sector?',
        answers: [{
                text: 'Yes, let\'s prioritize teaching',
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
        text: 'Given the state of social fatigue that governs the metropolises of your colony, we suggest that you set up brothels to increase the satisfaction level. Do you think that\'s a good idea?',
        answers: [{
                text: 'Yes, the well-being of the population first and foremost',
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
        text: 'Do you think that organizing exploration sessions on your planet could be useful? The interest would be to be able to discover and conquer new territories. On the other hand, you will most likely reduce the size of the area inhabited by wildlife.',
        answers: [{
                text: 'Yes, let\'s expand the human surface area',
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
        text: 'Some of your colony\'s employees are not motivated to work. Giving them rewards for each job done would be a way to motivate them more. However, gifts are not free, and require you to put your hand in the wallet. Do you accept?',
        answers: [{
                text: 'Yes, the comfort of the population above all',
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
                        themeAffected: 13,
                        value: -0.05
                    }
                ]
            },
            {
                text: 'No, our production will suffer as a result',
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
        text: 'An epidemic occurs in your colony. A group of 4000 settlers quickly found themselves infected and placed in quarantine. What do you decide?',
        answers: [{
                text: 'Spending money to find a cure',
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
        text: 'Recently, the creation of a health department was created within your colony. You know that, at the same time, the creation of health infrastructures is to be planned to treat the population. However, you know that your construction budget is far from unlimited. Which solution do you recommend?',
        answers: [{
                text: 'Prioritize medicinal plants over health infrastructure',
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
        text: 'You have the opportunity to promote new encounters in your colony by developing sports, artistic and intellectual associations. Do you accept?',
        answers: [{
                text: 'Yes, let\'s invest in the company',
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
        text: 'We propose that you create a new entertainment space that would be powered by clean energy. However, deforestation of a forest will be necessary to create this new area. Do you want to start the project?',
        answers: [{
                text: 'Yes, let\'s increase the comfort of society',
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
        text: 'An oil spill is pouring near the popular beach of Ysutum. You have the option of stopping the flow of the oil slick or letting the oil flow, which would then be tantamount to threatening the lives of 1000 inhabitants. What do you choose to do?',
        answers: [{
                text: 'Stop the flow of the oil spill',
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
        text: 'Your colony is beginning to establish itself. However, your engineers are wondering how the buildings could be built. Which material would you find most useful?',
        answers: [{
                text: 'Use arcanite (terrestrial equivalent of sand)',
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
        text: 'We propose that you create new roads on your planet to make cities more accessible. Are you starting the project?',
        answers: [{
                text: 'Yes, let\'s improve the road network',
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
        text: 'The installation of 20,000 telephone lines in your colony will bring about a major evolution on your planet. However, electricity is a rare commodity because your engineers have just arrived in the field. What do you want to do?',
        answers: [{
                text: 'Yes, let\'s improve the telephone network',
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
        text: 'The creation of a product capable of increasing vegetation growth is at your disposal. If you choose to use it, it reduces the area occupied by urban space. On the other hand, it will benefit the global ecosystem. What do you decide?',
        answers: [{
                text: 'You leave the product for sale',
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
        text: 'A la suite d’un endettement, le gouvernement de votre colonie vous propose d’imposer de nouvelles taxes sur l’ensemble des classes moyennes. Cela permettra de diminuer drastiquement la dette contractée mais aussi d’accroître les tensions entre les différentes classes sociales. Acceptez-vous ?',
        answers: [{
                text: 'Yes, it is better not to increase the colony\'s debt further',
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
        text: 'In recent months, settlers on your planet have begun to adopt a new religion. This consists in sacrificing several people monthly to satisfy the god of the Universe. Although a part of the civilian population does not accept this new religion, another part sees it as an opportunity to reconnect with the old traditions that existed on Earth in the past. What do you choose to do?',
        answers: [{
                text: 'Approve human sacrifices',
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
        text: 'The scientific department of your colony has just informed you of an imminent danger: the water dam located upstream of the capital is in danger of collapsing soon. However, nearby garbage bins can help create a garbage barrier that holds water. Do you confirm the proposal?',
        answers: [{
                text: 'Yes, let us prevent the inhabitants from dying',
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
        text: 'The price of electricity, which is only increasing. In order to reduce its consumption, we suggest that you deactivate all objects that use this energy. However, the duration of the cancellation has not yet been clearly defined. What do you decide?',
        answers: [{
                text: 'Never turn off the electricity',
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
        text: 'The price of gasoline is only increasing. However, although it is expensive, it is still essential to keep traffic running. Do you think it is necessary to regulate the accessibility of this product? What is the maximum amount of fuel per person you could imagine?',
        answers: [{
                text: 'Think of the planet: no gasoline sales',
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
                        value: -0.1
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
                effects: [{
                        themeAffected: 8,
                        value: 0.1
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
        text: 'The Andromeda League has found that the inhabitants of your colony pollute a lot. We propose that you set up an "air tax". What is your answer?',
        answers: [{
                text: 'Yes, let\'s reduce pollution',
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
        text: 'You have just discovered nuclear energy on the new planet. This will be of great benefit to your industries as well as to supply energy to the various households of your population. Would you like to use this technology?',
        answers: [{
                text: 'Yes, let\'s improve our industry',
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
        text: 'Although the demand for motor vehicles is booming, car manufacturers are overwhelmed. The colony\'s engineers offer to provide support with robots that will allow them to help them carry heavier weights. What is your answer?',
        answers: [{
                text: 'Yes, let\'s improve productivity with robots',
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
        text: 'A strike broke out on the planet: factory workers demanded more rest time and denounced gruelling working conditions. Do you think it is a good idea to reduce their working time by 2 hours per week?',
        answers: [{
                text: 'Yes, let\'s avoid risking a revolt',
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
        text: 'The Ministry of Education found that students were wasting too much time writing with pens. Laptops are then offered to replace manual writing. Do you accept?',
        answers: [{
                text: 'Yes, let\'s set up computers to save time',
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
        text: 'The Andromeda League noticed that the students were counterproductive in the morning between 8am and 10am. Do you think it is a good idea to postpone the students\' classes by 2 hours during the day?',
        answers: [{
                text: 'Yes, let\'s improve productivity',
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
                text: 'No, let\'s keep staying on a model that works',
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
        text: 'The Andromeda League has noticed that some students on your planet are having difficulty getting back to school. She suggests that you create buses that would pick up students every morning. Are you for or against?',
        answers: [{
                text: 'Yes, let\'s improve access to school',
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
                text: 'No, let\'s avoid polluting the environment with new roads',
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
        text: 'The economy is doing well! The opening of a new trade route with the Star League has allowed you to generate more revenue than usual. Three choices for improving your planet are available to you:',
        answers: [{
                text: 'Improving the industry',
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
        text: 'The trade union confederation found that public transport was not comfortable enough. We suggest you to implement different new features to make them more pleasant. What do you want to do?',
        answers: [{
                text: 'Do not change the seats',
                effects: [{
                        themeAffected: 0,
                        value: -0.05
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
        text: 'The population is exasperated by the number of working hours, which has only increased in recent months. The unions are asking the institutions to add 4 days of paid leave per year. What do you decide to do?',
        answers: [{
                text: 'I accept claims to improve living comfort',
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
        text: 'A group of terrorists has just taken a group of settlers hostage. The area is difficult for your special forces to access, as terrorists are entrenched in the mountains. Which solution do you recommend?',
        answers: [{
                text: 'Ignore terrorists and hostage-taking so as not to slow down the economy',
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
                text: 'Engage in talks with terrorists to negotiate a rescue',
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
                text: 'Invade the area with force and eliminate terrorists to eliminate the threat',
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
        text: 'The Ministry of Health noted that people in each country were becoming increasingly ill. He suggests that you create a factory manufacturing drugs to improve the health of the population. To manufacture this plant, the destruction of 5000 trees is necessary. Do you authorize its construction?',
        answers: [{
                text: 'Yes, let\'s make a drug factory',
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
        text: 'The Andromeda League and the Ministry of Health are short of money. They mentioned the possibility of abolishing health insurance in order to achieve greater savings. It is up to you to decide whether or not to confirm this decision.',
        answers: [{
                text: 'I accept the deletion to save money',
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
                text: 'I refuse the deletion to continue to protect health',
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
        text: 'The Andromeda League has spent too much energy to help its colonies. It gives you the opportunity to install solar panels on your planet to fill the energy gap you were supposed to receive. What answer do you want to give them?',
        answers: [{
                text: 'There will be no installation',
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
                text: 'Installation on 50% of the planet',
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
                text: 'Installation globale',
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
        text: 'The peoples of your colony wish to build walls to delimit the boundaries between each ethnic group. If their demands are met, people who wish to visit another ethnic group would have to be charged. Are you for or against?',
        answers: [{
                text: 'For the establishment of borders',
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
        text: 'The transatlantic and oceanic line cannot communicate. We propose that you build a bridge that would connect the two federations and thus promote exchanges, although this is not essential. What are you doing? What are you doing?',
        answers: [{
                text: 'I am building a bridge to promote exchanges',
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
                text: 'I refuse to build a bridge because there is no need for it',
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
        text: 'You are given the opportunity to fund a team of researchers to explore the seabed to measure the space that could be dedicated to the creation of an underwater city. Do you accept?',
        answers: [{
                text: 'I agree to fund the research team',
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
                text: 'I refuse to fund the research team',
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
        text: 'We give you the possibility to build a high-performance wind antenna, allowing you to no longer pay for electricity. Do you accept? ',
        answers: [{
                text: 'Yes, let\'s save electricity',
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
        text: 'The Andromeda League proposes to produce phones without entertainment applications. This would improve the concentration of employees in the office. Do you think that\'s a good idea?',
        answers: [{
                text: 'Yes, let\'s improve labour productivity',
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
        text: 'The company rebels against the government and criticizes the lack of wages. The authorities propose to increase the populations\' salaries by 10%, but in return, the populations must agree to work 5 additional hours per week. As Supreme Leader, do you accept the institutions\' proposal?',
        answers: [{
                text: 'Yes, let\'s make a compromise.',
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
        text: 'The Galactic Union noted that the satisfaction level of the people living on your planet was not high enough. Do you think that the construction of an amusement park in the most populated area of your colony could solve this problem?',
        answers: [{
                text: 'Yes, it would help to satisfy public order',
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
                text: 'No, it will bring down the economy',
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
        text: 'You have the possibility of building an airport that would facilitate exchanges and travel. As a result, 20% of the population would be impacted over a period of 2 years due to construction work. Which solution does it seem most appropriate to you?',
        answers: [{
                text: 'Do not build the airport to spare the population',
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
                text: 'Build the airport to improve travel',
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
                        themeAffected: 10,
                        value: -0.1
                    },
                    {
                        themeAffected: 11,
                        value: -0.1
                    },
                    {
                        themeAffected: 8,
                        value: 0.1
                    },
                    {
                        themeAffected: 3,
                        value: -0.05
                    },
                    {
                        themeAffected: 13,
                        value: -0.05
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
            },
            {
                text: 'Build the airport in record time but very resource-intensive',
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
        text: 'The Andromeda League has just received subsidies from the colonies of other solar systems. In order to distribute these new earnings fairly, you are given the opportunity to use these funds for your own colony or not to accept them.',
        answers: [{
                text: 'I agree to use this new funding, it will help the colony',
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
        text: 'You have the possibility to create a virtual cryptocurrency allowing the fluidification of exchanges between populations. The currency would work thanks to blockchain technology. What do you decide?',
        answers: [{
                text: 'I authorize the creation of cryptocurrency',
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
        text: 'The Ministry of Finance has found that many people do not declare their wealth to the Andromeda League. You have the possibility to set up "PayRobot", a high-performance algorithm that is nevertheless very energy-intensive. Does it seem appropriate to you to implement this algorithm?',
        answers: [{
                text: 'Yes, it will improve the economy',
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
        text: 'X-ZTY cars have just been introduced. Equipped with a hypersonic engine, they allow you to accelerate your journey to other planets. Their release could be beneficial to your colony\'s trade, but will also bring several disadvantages. What do you choose?',
        answers: [{
                text: 'sell X-ZTY cars',
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
        text: 'If there is one thing you hate, it is to see industrial production slow down. However, in recent months, the colonial labour confederation has not succeeded in stopping the risks of technical failures that have affected the majority of your factories. Consequence: you must find a solution as soon as possible to save global production. What do you choose?',
        answers: [{
                text: 'I\'m increasing the workers\' wages',
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
        text: 'The Andromeda League noticed that flying cars were losing too much fuel by getting stuck in the "control zone". We propose the installation of an automatic controller that would allow traffic to flow more smoothly. Do you think this is good for the planet?',
        answers: [{
                text: 'Yes, it will only bring advantages',
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
        text: 'The Andromeda League wants to revive education on the planet. Several proposals for improvement are proposed, such as the robotization of teaching. What are you doing? What are you doing?',
        answers: [{
                text: 'Accept the proposal to promote education',
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
        text: 'A new distance education system has emerged. Thanks to the evolution of technology, the colony\'s scientists are now able to use the planet\'s energy to broadcast the courses live. The army is also beginning to take an interest in this technology. What do you choose to do?',
        answers: [{
                text: 'I agree with this decision, it will help education',
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
        text: 'The Ministry of Education noted that 20% of students were in academic failure. To solve this problem, the Council proposes to create accompanying robots that would help with tutoring. Would you like to set up these robots?',
        answers: [{
                text: 'Yes, let us promote the education system',
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
        text: 'You are in the position to produce Boeing3000 aircraft. These aircraft of the future could travel at a lightning speed but have the disadvantage of being much more polluting than current trains. On the other hand, it would increase the speed of travel. What do you decide?',
        answers: [{
                text: 'I accept the production of the Boeing3000',
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
        text: 'Phalene skin is used to make comfortable clothing. Only, it is an endangered animal. Recently, your researchers hypothesized that there would be other phalens in the solar system. The extinction of this animal species on your planet could thus continue without risking a stock shortage throughout the galaxy. What do you decide?',
        answers: [{
                text: 'You prohibit hunters from continuing to hunt the phalène and you create a protected species status',
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
                text: 'You let your colony\'s phalène die and start funding an expedition to find the same species',
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
        text: 'The journey between the oceanic and transatlantic line takes too long. You have the possibility to reduce the travel time by two by building a bridge. As a result, the world economy would be more efficient because it would be faster, but construction would require a certain energy cost. Which solution does it seem most appropriate to you?',
        answers: [{
                text: 'Yes, let\'s reduce travel time',
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
        text: 'Knowing that your planet is beginning to become overcrowded, you have the possibility of contaminating part of the population with the "lethal" bacteria to reduce the population explosion. Do you accept?',
        answers: [{
                text: 'I accept the spread of a bacterium',
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
        text: 'Scientists have recently found a way to revive the ancient animal species that once inhabited your planet! Educational and scientific institutions are in turmoil, while animal associations and religious communities are concerned about the risks involved in this decision. What do you recommend?',
        answers: [{
                text: 'Authorize the resurrection and garrison of creatures in museums',
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
                text: 'Do not allow resurrection to avoid further conflict',
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
        text: 'The general performance of the populations in the factories is too low. We propose the implementation of a chip that multiplies the performance of employees by 4. However, it would have negative long-term effects. Would you like to set it up?',
        answers: [{
                text: 'Yes, work growth cannot be put aside',
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
        text: 'You have the possibility to create a "LoopH" supersonic train that will allow your population to move much faster and therefore save time. Do you authorize its creation?',
        answers: [{
                text: 'I agree to the train being put into service',
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
        text: 'Following new waves of migration, you discover that you cannot accommodate all the new settlers on your planet. What to do about it?',
        answers: [{
                text: 'Place half of the colony in low-cost prefabricated buildings',
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
                text: 'Ensure that all your population is housed',
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
        text: 'The Andromeda Ligue wishes to entertain its inhabitants by building a 7D cinema. This construction will be very expensive in terms of energy and resources, but these facilities are worth it because it will generate benefits. Do you think that\'s a good idea?',
        answers: [{
                text: 'Yes, let\'s improve the comfort of the population',
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
        text: 'A new teleportation technology has just been invented. This allows the user to move instantly to another place on the planet. As a terra-selector, you have enough money to buy the license and market it to make it easier for your settlers to move around. Do you accept?',
        answers: [{
                text: 'I accept, it will improve the comfort of life',
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
        text: 'Thanks to recent technological advances, you are given the opportunity to transform some people into trees with the "anthropomorphium" pill. Although many people would regret seeing their loved ones turn into trees, environmental institutions would be delighted to be able to allow the planet to breathe more. Are you interested?',
        answers: [{
                text: 'I agree to turn people into trees',
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
                text: 'I don\'t accept to turn people into trees',
                effects: [{
                        themeAffected: 14,
                        value: -0.05
                    },
                    {
                        themeAffected: 12,
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
        id: 69,
        text: 'Artificial intelligence is at its peak. We propose to replace 20% of the population with high-performance robots. Do you accept?',
        answers: [{
                text: 'Yes, let\'s replace part of the population. This will increase productivity',
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
        text: 'We propose to create drones that allow the population to send packages at a light speed. On the other hand, the production of drones has the particularity of consuming a lot of energy. Do you think that\'s a good idea?',
        answers: [{
                text: 'I accept, this new technology will improve everyone\'s comfort',
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
                text: 'I refuse, this excess energy will have a negative impact on the planet',
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
        text: 'The Colonial Security Department has found that a new drug is spreading around the world. This arouses the interest of the population but also the mistrust of health institutes. The police want to take it but can no longer get their hands on it, and beg for your help. What answer do you give them?',
        answers: [{
                text: 'I\'m developing the police budget to allow them to intercept this drug',
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
                text: 'I decide to help the police only after the scientific institutes have proven that this drug is destructive',
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
                text: 'I let the drugs spread because the population appreciates them and the economy is doing well',
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
        text: 'A war has just broken out between the two most powerful countries on your planet. The inhabitants are no longer safe and the company is threatening to explode. The Andromeda League is trying to resolve this situation and is asking you to take action. What do you decide?',
        answers: [{
                text: 'I authorize the Andromeda League to deploy an army to restore the situation',
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
                text: 'I launch a nuclear attack to force warring countries to stop',
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
                text: 'I am organizing a massive exodus to allow the population to flee the war',
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
        text: 'The teleportation has just arrived on the market. However, this technology remains very expensive and is only accessible to a small part of the population. Do you want to put it in place? ',
        answers: [{
                text: 'Yes, society will benefit greatly from it',
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