using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data
{
    public class ShortAnswer : Question
    {
        public ShortAnswer(string data)
        {
            string[] info = data.Split("||");
            Difficulty = Int32.Parse(info[0]);
            _questionText = info[1];
            _correctAnswer = info[2];
        }
        private string _questionText;
        public override string QuestionText { get => _questionText; }

        private bool _correct;
        public override bool Correct
        {
            get
            {
                return false;
            }
        }
        public override int Difficulty { get; }

        private string _correctAnswer;
        public string CorrectAnswer { get => _correctAnswer; }

    }
}
