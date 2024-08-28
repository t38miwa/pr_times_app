import Link from "next/link";

const Question_4 = () => {
    return (
        <div className="question-container">
            <h1>どういう人々に会社をアピールしたいですか？</h1>
            <button>若年層</button>
            <button>中年層</button>
            <button>高齢者層</button>

            <div className="next-button-container">
                <Link href={`/question_5`} passHref>
                <button className="next-button">次へ</button>
                </Link>
            </div>
        </div>
    );
}

export default Question_4;
