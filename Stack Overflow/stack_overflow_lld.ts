class User {
    guestId: number;
    searchObj: Search;

    getQuestions(searchString: string): Array<Question> { return; }
}

class Search {
    searchByText(text: string): Array<Question> { return; }
}

class Member extends User {
    account: Account;
    badges: Array<Badge>;

    addQuestion(question: Question): void { }
    addComment(entity: Entity, comment: Comment): void { }
    addAnswer(question: Question, answer: Answer): void { }
    vote(entity: Entity, voteType: VoteType): void { }
    addTag(question: Question, tag: Tag): void { return; }
    flag(entity: Entity): void { return; }
    getBadges(): Array<Badge> { return; }
}

class Account {
    fullname: string;
    address: Address;
    accountId: string;
    username: string;
    password: string;
    email: string;
    accountStatus: AccountStatus;

    reputation: number;
}

class Address { }

class Moderator extends Member {
    closeQuestion(question: Question): boolean { return; }
    restoreQuestion(question: Question): boolean { return; }
}

class Admin extends Member {
    blockMember(member: Member): boolean { return; }
    unblockMember(member: Member): boolean { return; }
}

enum AccountStatus {
    BLOCKED, ACTIVE, CLOSED
}

enum VoteType {
    UPVOTE, DOWNVOTE, CLOSEVOTE, DELETEVOTE
}

class Badge {
    name: string;
    description: string;
}

class Entity {
    entityId: string;
    creator: Member;
    votes: Map<VoteType, number>;
    createdDate: Date;
    comments: Array<CommentEntity>;

    flagEntity(member: Member): boolean { return; }
    voteEntity(voteType: VoteType): boolean { return; }
    addComment(comment: CommentEntity): boolean { return; }
}

class CommentEntity extends Entity {
    editHistoryList: Array<EditHistory>;
    answerList: Array<Answer>;
    tags: Array<Tag>;
    title: string;
    description: string;
    status: QuestionStatus;

    addQuestion(): boolean { return; }
    addTag(tag: Tag): boolean { return; }
}

class Question extends Entity {
    editHistoryList: Array<EditHistory>;
    answerList: Array<Answer>;
    tags: Array<Tag>;
    title: string;
    description: string;
    status: QuestionStatus;

    addQuestion(): boolean { return; }
    addTag(tag: Tag): boolean { return; }
}

class Answer extends Entity {
    answer: string;
    isAccepted: boolean;
    addAnswer(question: Question): boolean { return; }
}

enum QuestionStatus {
    ACTIVE, BOUNTED, CLSOED, FLAGGED
}

class Tag {
    name: string;
    description: string;
}

class EditHistory {
    editHistory: string;
    creator: Member;
    creationDate: Date;
    prevQuestion: Question;
    updatedQuestion: Question;
}
