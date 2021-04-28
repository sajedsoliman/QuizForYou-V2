const QUIZ_DIFFICULTIES = ["Easy", "Hard", "Medium"];

const QUESTION_LIMITS = [5, 10, 15, 20];

const SAVED_QUESTIONS = "saved-questions";

const noArchivedQuestionsMessage =
	"You have not archived any questions yet. Go do some";

const noQuestionsMessage =
	"Ops, your sort controls don't meet our data. Try other controls.";

const apiFetch = async (category, limit, difficulty) => {
	// get the category id
	const req = await fetch("https://opentdb.com/api_category.php");
	const categories = await req.json();
	const selectedCategory = categories.trivia_categories.find(
		(cate) => cate.name == category
	).id;

	return `https://opentdb.com/api.php?category=${selectedCategory}&amount=${limit}&difficulty=${difficulty}&type=multiple`;
};

const QUIZ_CATEGORIES = [
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
];
const imageCovers = {
	Animals:
		"https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
	Vehicles:
		"https://images.unsplash.com/photo-1565043666747-69f6646db940?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
	Politics:
		"https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
	History:
		"https://images.unsplash.com/photo-1473163928189-364b2c4e1135?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
	Geography:
		"https://images.unsplash.com/photo-1562742940-e255567c00f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
	Sports:
		"https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
	Mythology:
		"https://images.unsplash.com/photo-1598565061654-9339be95a371?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
	"Science: Computers":
		"https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
	"Science: Mathematics":
		"https://images.unsplash.com/photo-1596495577886-d920f1fb7238?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1054&q=80",
	"Science & Nature":
		"https://images.unsplash.com/photo-1430933964450-0aefb85717c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
	"Japanese Anime & Manga":
		"https://images.unsplash.com/photo-1569701813229-33284b643e3c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1088&q=80",
	"Entertainment: Cartoon & Animations":
		"https://images.unsplash.com/photo-1520182205149-1e5e4e7329b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1021&q=80",
	"Entertainment: Television":
		"https://images.unsplash.com/photo-1461151304267-38535e780c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1190&q=80",
	"Entertainment: Music":
		"https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
	"Entertainment: Musicals & Theatres":
		"https://images.unsplash.com/photo-1566150951155-4a59643d8a9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
	"Entertainment: Film":
		"https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1040&q=80",
	"Entertainment: Books":
		"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80",
	"Board Games":
		"https://images.unsplash.com/photo-1611371805429-8b5c1b2c34ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
	"General Knowledge":
		"https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
};

function getCoverBasedOnCategory(category) {
	return imageCovers[category];
}

export {
	QUIZ_CATEGORIES,
	QUIZ_DIFFICULTIES,
	QUESTION_LIMITS,
	SAVED_QUESTIONS,
	apiFetch,
	noArchivedQuestionsMessage,
	noQuestionsMessage,
	getCoverBasedOnCategory,
};
