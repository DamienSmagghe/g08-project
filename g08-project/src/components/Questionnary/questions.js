export const questions = [
    {
        id: 0,
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
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
    }
]