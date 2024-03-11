import Button from '@/app/components/Button';

export default function Header({ isLoaded }: { isLoaded: boolean }) {
  if (!isLoaded) {
    return null;
  }

  return (
    <div className="border-transparent bg-transparent fixed w-full p-5 px-10 flex flex-row justify-between items-center border z-30 transition duration-300 fade-in max-w-[2000px] m-auto">
      <p className="font-specialmonster text-2xl mr-5 tracking-normal">
        Adrena
      </p>

      <Button className="p-2 w-[125px] sm:w-[175px] text-sm" />
    </div>
  );
}
