type TaskData = {
    taskId: string;
    isReady: boolean;
    title: string;
}

type TasksBlockState = {
    tasks: TaskData[];
}

type TaskItemsProps = {
    tasks: TaskData[];
    deleteHandler: any;
}

type TaskItemProps = {
    taskItem: TaskData
    deleteHandler: any;
}

type TaskFormProps = {
    taskText: string;
    addHandler: any;
}

type TaskFormState = {
    taskText: string;
}

type MessageFormProps = {
    messageFormData: MessageData;
    addMessageHandler: any;
    checkCondition: boolean;
}

type MessageData = {
    key: string
    author: string;
    messageText: string;
}

type MessageProps = {
    messages: MessageData[];
}

type MessagesListData = {
    messages: MessageData[];
    authors: string[];
    chatId: number;
}

type MessagesListProps = {
    messages: MessagesListData;
    updateChatDB: (data: messagesListData) => void;
}

type Chat = {
    id: number;
    title: string,
    description: string;
    messages: MessagesListData
}

