import * as React from "react";
import {useEffect, useState} from 'react';

type IframeWrapperProps = {
  endpoint: string; // URL da API

} & React.ComponentProps<'iframe'>;

export const IframeWrapper = ({endpoint, ...props}: IframeWrapperProps) => {
  const [iframeUrl, setIframeUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(endpoint);
        const data = await res.json();
        setIframeUrl(data);
      } catch (err) {
        console.error('Erro ao buscar dados para o iframe:', err);
      }
    };

    fetchData().then(() => {
    });
  }, [endpoint]);

  if (!iframeUrl) return <p>Carregando iframe...</p>;

  return (
    <iframe
      src={iframeUrl}
      {...props}
    />
  );
};
