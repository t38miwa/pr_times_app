import Link from "next/link";

const Question_1 = () => {
    return (
        <div className="question-container">
            <h1>5個の質問にお答えください</h1>
            <h1>1.会社の規模を教えてください</h1>
            <button>資本金100万円以下</button>
            <button>資本金1000万円以下</button>
            <button>資本金5000万円以下</button>
            <button>資本金1億円以下</button>
            <button>資本金10億円以下</button>

            <div className="next-button-container">
                <Link href={`/question_2`} passHref>
                <button className="next-button">次へ</button>
                </Link>
            </div>
        </div>
    );
}

export default Question_1;
