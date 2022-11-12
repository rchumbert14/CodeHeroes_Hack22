using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data
{
    public class MultiChoice : Question
    {
        public MultiChoice(string data)
        {
            string[] info = data.Split("||");
            Difficulty = Int32.Parse(info[0]);
            _questionText = info[1];
            _correctIndex = Int32.Parse(info[2]);
            _choices = new();
            _choices.Add(info[3]);
            _choices.Add(info[4]);
            _choices.Add(info[5]);
            _choices.Add(info[6]);
        }
        private string _questionText;
        public override string QuestionText
        {
            get
            {
                return _questionText;
            }
        }

        public override bool Correct
        {
            get
            {
                return false;
            }
        }

        public override int Difficulty { get; }

        private int _correctIndex;
        public int CorrectIndex { get => _correctIndex; }

        private List<string> _choices;
        public List<string> Choices
        {
            get
            {
                return _choices;
            }
        }
    }
}
