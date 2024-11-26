import { Button } from "@/components/ui/button";
import { formatAddress, formatMoney } from "@/lib/utils";

interface Props extends TokenInfoType, PoolInfoType {}

function Info(props: Props) {
  return (
    <aside className="flex flex-col gap-4 md:flex-row">
      <div className="w-full flex-1">
        <Button
          variant="outline"
          className="rounded-none bg-secondary border-primary-foreground border-b-0 uppercase p-4 h-fit"
        >
          <h3 className="text-xl md:text-2xl font-semibold font-inter uppercase">token information</h3>
        </Button>
        <div className="border border-primary-foreground p-4">
          <Points point="Token Ticker" data={props.symbol} />
          <hr className="border border-primary-foreground my-6" />
          <Points point="Tokens for Sale" data={formatMoney(props.sale_token_amount)} />
          <hr className="border border-primary-foreground my-6" />
          <Points point="Token Address" data={formatAddress(props.address)} />
          <hr className="border border-primary-foreground my-6" />
          <Points point="Decimals" data={props.decimals} />
        </div>
        <div className="border border-primary-foreground border-t-0 w-[98%] p-1" />
      </div>
      <div className="w-full flex-1 flex flex-col">
        <div className="flex justify-end">
        <Button
          variant="outline"
          className="rounded-none bg-secondary border-primary-foreground border-b-0 uppercase p-4 h-fit"
        >
          <h3 className="text-xl md:text-2xl font-semibold font-inter uppercase">pool information</h3>
        </Button></div>
        <div className="border border-primary-foreground p-4">
          <Points point="Minimum Allocation" data={props.min_alloc} />
          <hr className="border border-primary-foreground my-6" />
          <Points point="Maximum Allocation" data={props.max_alloc} />
          <hr className="border border-primary-foreground my-6" />
          <Points point="Pool Address" data={formatAddress(props.pool_address)} />
          <hr className="border border-primary-foreground my-6" />
          <Points point="Access Type" data={props.access_type} /> 
        </div>
        <div className="border border-primary-foreground border-t-0 w-[98%] p-1" />
      </div>
    </aside>
  );
}

interface P_Props {
  point: string;
  data: string | number;
}
function Points({ point, data }: P_Props) {
  return (
    <div className="flex justify-between items-center">
      <p className="text-sm md:text-lg font-normal font-inter">{point}</p>
      <span className="text-base md:text-xl font-semibold text-primary-foreground font-inter">{data}</span>
    </div>
  );
}


export default Info