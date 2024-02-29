import { Alert, AlertIcon } from "@chakra-ui/alert";
import SaveTheDateApp from "./SaveTheDate";
import WorkInProgressWarningDialog from "./components/WorkInProgressWarningDialog";

export default function Page() {
  return (
    <>
      <Alert status="warning" position="absolute">
        <AlertIcon />
        Please don't rely on any information shown here. This page is a work in
        progress.
      </Alert>
      <WorkInProgressWarningDialog />
      <SaveTheDateApp />
    </>
  );
}
