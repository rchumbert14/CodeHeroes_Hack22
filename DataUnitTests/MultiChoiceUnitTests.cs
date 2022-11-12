using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Data;

namespace DataUnitTests
{
    public class MultiChoiceUnitTests
    {
        [Fact]
        public void DataParseShouldBeCorrect()
        {
            MultiChoice q = new("2||How many questions are there?||3||One||Two||Three||Four");
            Assert.Equal(2, q.Difficulty);
            Assert.Equal("How many questions are there?", q.QuestionText);
            Assert.Equal(3, q.CorrectIndex);
            Assert.Equal("One", q.Choices[0]);
            Assert.Equal("Two", q.Choices[1]);
            Assert.Equal("Three", q.Choices[2]);
            Assert.Equal("Four", q.Choices[3]);
        }
        

    }
}
