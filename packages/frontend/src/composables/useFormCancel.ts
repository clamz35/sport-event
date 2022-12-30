import { useRouter } from 'vue-router';

type UseFormCancelOutput = () => void;

export const useFormCancel = (): UseFormCancelOutput => {
  const router = useRouter();
  return (): void => {
    if (router.options.history.state.back) {
      router.back();
    } else {
      router.push({ name: 'home' });
    }
  };
};
