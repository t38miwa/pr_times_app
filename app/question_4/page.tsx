import Link from "next/link";

const Question_4 = () => {
    return (
        <div className="question-container">
            <h1>どういう人々に会社をアピールしたいですか？</h1>
            <button>若年層</button>
            <button>中年層</button>
            <button>高齢者層</button>

            <Link href={`/question_5`}>
            <button>次へ</button>
            </Link>
        </div>
    );
}

export default Question_4;
