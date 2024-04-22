import React from "react";
import {
  Create,
  SimpleForm,
  required,
  TextInput,
  ReferenceInput,
  NumberInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

export const ChallengeOptionCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="text" validate={[required()]} label="Text" />
        <SelectInput
          source="type"
          choices={[
            {
              id: "SELECT",
              name: "SELECT",
            },
            {
              id: "ASSIST",
              name: "ASSIST",
            },
          ]}
          validate={[required()]}
        />
        <BooleanInput source="correct" label="Correct option"/>
        <ReferenceInput source="challengeId" reference="challenges" />
        <TextInput source="imageSrc" validate={[required()]} label="Image Url" />
        <TextInput source="audioSrc" validate={[required()]} label="Audio Url" />
      </SimpleForm>
    </Create>
  );
};
