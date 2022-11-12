using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data
{
    /// <summary>
    /// Class to handle the backend logic of the game
    /// </summary>
    public class Logic
    {
        private Random rand = new();
        
        public Logic()
        {
            //Generate ShortAnswer Question Objects
            _shortAnswer = new();
            foreach (string line in System.IO.File.ReadLines("./QuestionData/ShortAnswerQuestions"))
            {
                _shortAnswer.Add(new ShortAnswer(line));
            }
            //Generate MultiChoice Question Objects
            _multiChoice = new();
            foreach (string line in System.IO.File.ReadLines("./QuestionData/MultiChoiceQuestions"))
            {
                _multiChoice.Add(new MultiChoice(line));
            }
            _currentQuestion = _multiChoice[0];
            RandomizeQuestion();
        }
        
        /// <summary>
        /// Randomizes the current question to either a short answer or multichoice questionss
        /// </summary>
        public void RandomizeQuestion()
        {
            int questionType = rand.Next(1);
            if (questionType == 1)
            {
                _currentQuestion = _multiChoice[rand.Next(_multiChoice.Count - 1)];
            } else
            {
                _currentQuestion = _shortAnswer[rand.Next(_shortAnswer.Count - 1)];
            }
        }

        /// <summary>
        /// Overloaded method for checkanswer
        /// </summary>
        /// <param name="answer">Answer for a short answer question</param>
        /// <returns>True if correct answer</returns>
        /// <exception cref="InvalidOperationException">Thrown if current question is not a short answer question</exception>
        public bool CheckAnswer(string answer)
        {
            if (_currentQuestion is ShortAnswer q)
            {
                if (answer.Equals(q.CorrectAnswer))
                {
                    return true;
                }
                else return false;
            } else
            {
                throw new InvalidOperationException("Current Question should be Short Answer");
            }
        }   

        /// <summary>
        /// Overloaded method to check a multiple chocie question
        /// </summary>
        /// <param name="answerIndex">Index of the answer</param>
        /// <returns>True if correct</returns>
        /// <exception cref="InvalidOperationException">Thrown if not a multichoice question</exception>
        public bool CheckAnswer(int answerIndex)
        {
            if (_currentQuestion is MultiChoice q)
            {
                if (answerIndex == q.CorrectIndex)
                {
                    return true;
                }
                else return false;
            } else
            {
                throw new InvalidOperationException("Current Question should be Multiple Choice");
            }
        }
        /// <summary>
        /// List of Short Answer Questions
        /// </summary>
        private List<ShortAnswer> _shortAnswer;
        /// <summary>
        /// List of Multiple Choice Questions
        /// </summary>
        private List<MultiChoice> _multiChoice;

        /// <summary>
        /// Private reference to the current question
        /// </summary>
        private Question _currentQuestion;
        /// <summary>
        /// Current Question
        /// </summary>
        public Question CurrentQuestion { get => _currentQuestion; }

        /// <summary>
        /// Private player health
        /// </summary>
        private int _playerHealth;
        /// <summary>
        /// The Player's health
        /// </summary>
        public int PlayerHealth { 
            get
            {
                return _playerHealth;
            } 
            set
            {
                _playerHealth = value;
            }
        }

        /// <summary>
        /// Private monster health
        /// </summary>
        private int _monsterHealth;
        /// <summary>
        /// Monster's Health
        /// </summary>
        public int MonsterHealth
        {
            get
            {
                return _playerHealth;
            }
            set
            {
                _playerHealth = value;
            }
        }


    }
}
