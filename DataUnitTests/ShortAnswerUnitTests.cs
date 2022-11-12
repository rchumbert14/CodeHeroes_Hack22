using Data;
namespace DataUnitTests
{
    public class ShortAnswerUnitTests
    {
        [Fact]
        public void DataParseShouldBeCorrect()
        {
            ShortAnswer q = new("1||Test Question||Answer");
            Assert.Equal("Test Question", q.QuestionText);         
            Assert.Equal(1, q.Difficulty);
            Assert.Equal("Answer", q.CorrectAnswer);
        }
    }
}