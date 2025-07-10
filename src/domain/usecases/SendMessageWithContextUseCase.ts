import GeminiDataSourceImpl from "../../data/datasources/GeminiDataSourceImpl";
import { ChatMessageInterface } from "../../data/models/ChatMessageInterface";

export default class SendMessageWithContextUseCase {
  async execute(messages: ChatMessageInterface[]): Promise<string> {
    return GeminiDataSourceImpl.sendMessageWithContext(messages);
  }
}
