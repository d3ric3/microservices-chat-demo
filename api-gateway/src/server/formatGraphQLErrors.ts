import { GraphQLError } from "graphql";

const formatGraphQlErrors = (error: GraphQLError) => {
  // @ts-ignore
  const errorDetails = error.originalError?.response?.body;

  try {
    if (errorDetails) return JSON.parse(errorDetails);
  } catch (err) {}

  if (error.message) return error.message;

  return null;
};

export default formatGraphQlErrors;
