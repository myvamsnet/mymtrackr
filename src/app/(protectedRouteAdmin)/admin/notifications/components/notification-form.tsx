"use client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReactMarkdown from "react-markdown";
import { CustomInput } from "@/components/CustomInput";
import { CustomModal } from "@/components/CustomModal";
import { useCreateNotification } from "../hooks/useCreateNotification";

export default function NotificationForm() {
  const {
    onConfirm,
    onCancel,
    modal,
    handleSubmit,
    onSubmitNotification,
    body,
    activeTab,
    setActiveTab,
    control,
    isPending,
  } = useCreateNotification();
  return (
    <CustomModal
      btnText={"Add Notification"}
      onOpenChange={(open) =>
        onConfirm({
          type: "create",
          isOpen: open,
        })
      }
      isOpen={modal.type === "create" && modal.isOpen}
      title="Add Notification"
      subTitle=""
      content=""
    >
      <form onSubmit={handleSubmit(onSubmitNotification)} className="space-y-4">
        <CustomInput
          name="title"
          control={control}
          type="text"
          label="Title"
          placeholder="Enter Title"
        />
        <div className="space-y-2 mt-4">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger
                value="edit"
                className={`${activeTab === "edit" ? "text-primary" : ""}`}
              >
                Edit
              </TabsTrigger>
              <TabsTrigger
                value="preview"
                className={`${activeTab === "preview" ? "text-primary" : ""}`}
              >
                Preview
              </TabsTrigger>
            </TabsList>
            <TabsContent value="edit" className="mt-2">
              <CustomInput
                name="body"
                control={control}
                type="textarea"
                placeholder="**Bold text**, *italic text*, [links](https://example.com), etc."
                label="Body (Markdown supported)"
              />
              <p className="text-xs text-muted-foreground mt-2">
                Supports Markdown: **bold**, *italic*, [links](url), etc.
              </p>
            </TabsContent>
            <TabsContent value="preview" className="mt-2">
              <div className="border rounded-md p-3 min-h-[150px] prose prose-sm max-w-none">
                {body ? (
                  <ReactMarkdown>{body}</ReactMarkdown>
                ) : (
                  <p className="text-muted-foreground italic">
                    Preview will appear here...
                  </p>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="flex gap-2 justify-end">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" disabled={isPending}>
            {isPending ? "Loading..." : "Add Notification"}
          </Button>
        </div>
      </form>
    </CustomModal>
  );
}
