import type { proto, GroupMetadata } from "@adiwajshing/baileys";

function download(): Promise<Buffer>;
function download(filename: string): Promise<string>;

declare type MessageSerialize = {
  /** Properties of a Message. */
  message: proto.IMessage;

  /** Properties of a MessageKey. */
  key: proto.IMessageKey;

  /** MessageKey id */
  id: string;

  /** Is message from Bot? */
  isBotMsg: boolean;

  /** Is message from group chats? */
  isGroupMsg: boolean;

  /** MessageKey remoteJid */
  from: string;

  /** MessageKey fromMe */
  fromMe: boolean;

  /** Type of a message */
  type: string;

  /** MessageKey sender */
  sender: string;

  /** Body / content message  */
  body: string;

  /** message expiration, 0 if doesnt exists */
  expiration: number;

  /** message timestamps */
  timestamps: number;

  /** Mentions user list */
  mentions: string[];

  /**
   * @param {string} text:string
   * @param {boolean} quoted?:boolean
   * @returns {Promise<proto.WebMessageInfo>} if quoted is set to true will reply the message otherwise just typing back..
   */
  reply: (text: string, quoted?: boolean) => Promise<proto.WebMessageInfo>;

  /**
   * @param {string} filename?:string
   * @returns {Promise<string | Buffer>} if filename is empty return buffers otherwise return file path
   */
  download(): Promise<Buffer>;
  download(filepath: string): Promise<string>;

  /** Properties of a Quoted Message. */
  quoted?: MessageSerialize;

  /** Nickname for users */
  pushname: string;

  /** Group Metadata */
  groupMetadata: GroupMetadata;
};