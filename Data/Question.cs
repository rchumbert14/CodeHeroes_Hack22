using System.ComponentModel;

namespace Data
{
    public abstract class Question
    {

        /// <summary>
        /// The question being asked
        /// </summary>
        public abstract string QuestionText { get; }

        /// <summary>
        /// Boolean value if the question was correct
        /// </summary>
        public abstract bool Correct { get; }

        public abstract int Difficulty { get; }
    }
}