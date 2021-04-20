const QUIZ_CATEGORIES = [
    "Board Games",
    "General Knowledge",
    "Entertainment: Books",
    "Entertainment: Film",
    "Entertainment: Musicals & Theatres",
    "Entertainment: Music",
    "Entertainment: Television",
    "Entertainment: Cartoon & Animations",
    "Entertainment: Japanese Anime & Manga",
    "Entertainment: Board Games",
    "Science & Nature",
    "Science: Mathematics",
    "Science: Computers",
    "Mythology",
    "Sports",
    "Geography",
    "History",
    "Politics",
    "Vehicles",
    "Animals",
]
const QUIZ_DIFFICULTIES = [
    "Easy",
    "Hard",
    "Medium"
]

const QUESTION_LIMITS = [
    5, 10, 15, 20
]

const SAVED_QUESTIONS = "saved-questions"

const noArchivedQuestionsMessage = "You have not archived any questions yet. Go do some"

const noQuestionsMessage = "Ops, your sort controls don't meet our data. Try other controls."

const apiFetch = async (category, limit, difficulty) => {
    // get the category id
    const req = await fetch("https://opentdb.com/api_category.php")
    const categories = await req.json()
    const selectedCategory = categories.trivia_categories.find(cate => cate.name == category).id

    return `https://opentdb.com/api.php?category=${selectedCategory}&amount=${limit}&difficulty=${difficulty}&type=multiple`
}

export {
    QUIZ_CATEGORIES,
    QUIZ_DIFFICULTIES,
    QUESTION_LIMITS,
    SAVED_QUESTIONS,
    apiFetch,
    noArchivedQuestionsMessage,
    noQuestionsMessage
}