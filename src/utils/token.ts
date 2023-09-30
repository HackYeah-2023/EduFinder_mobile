import { LoginAction } from '_store/slices/auth';
import { Token } from '_utils';
import { Buffer } from 'buffer';

export const parseToken = ({ token }: Token) => {
  const base64Payload = token.split('.')[1];
  const payload = Buffer.from(base64Payload, 'base64');
  return JSON.parse(payload.toString());
};

export const getTokenData = (token: Token): LoginAction | null => {
  console.log(token.token);
  const parsed = parseToken(token);

  try {
    return {
      nameId: parsed.nameid,
      email: parsed.email,
      labelId: parsed.labelid,
      hasLabel: false,
      hasContract: parsed.hascontract,
      language: parsed.language,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};
