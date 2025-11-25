"use client"

import { useState } from "react"
import { FiBell } from "react-icons/fi"
import {
  SectionContainer,
  SectionHeader,
  SectionIcon,
  SectionTitle,
  ContentContainer,
  PreferenceItem,
  PreferenceInfo,
  PreferenceLabel,
  PreferenceDescription,
  ToggleSwitch,
  ToggleSlider,
} from "./style"

const Preferencias = () => {
  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    promotions: true,
    orderUpdates: true,
    newsletter: false,
  })

  const togglePreference = (key) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <SectionContainer>
      <SectionHeader>
        <SectionIcon $bgColor="#e0e7ff" $iconColor="#4f46e5">
          <FiBell size={20} />
        </SectionIcon>
        <SectionTitle>Preferências de Notificação</SectionTitle>
      </SectionHeader>

      <ContentContainer>
        <PreferenceItem>
          <PreferenceInfo>
            <PreferenceLabel>Notificações por Email</PreferenceLabel>
            <PreferenceDescription>Receba atualizações sobre pedidos, promoções e novidades</PreferenceDescription>
          </PreferenceInfo>
          <ToggleSwitch
            $isActive={preferences.emailNotifications}
            onClick={() => togglePreference("emailNotifications")}
          >
            <ToggleSlider $isActive={preferences.emailNotifications} />
          </ToggleSwitch>
        </PreferenceItem>

        <PreferenceItem>
          <PreferenceInfo>
            <PreferenceLabel>Promoções e Ofertas</PreferenceLabel>
            <PreferenceDescription>Seja notificado sobre descontos exclusivos</PreferenceDescription>
          </PreferenceInfo>
          <ToggleSwitch $isActive={preferences.promotions} onClick={() => togglePreference("promotions")}>
            <ToggleSlider $isActive={preferences.promotions} />
          </ToggleSwitch>
        </PreferenceItem>

        <PreferenceItem>
          <PreferenceInfo>
            <PreferenceLabel>Atualizações de Pedido</PreferenceLabel>
            <PreferenceDescription>Receba notificações sobre o status dos seus pedidos</PreferenceDescription>
          </PreferenceInfo>
          <ToggleSwitch $isActive={preferences.orderUpdates} onClick={() => togglePreference("orderUpdates")}>
            <ToggleSlider $isActive={preferences.orderUpdates} />
          </ToggleSwitch>
        </PreferenceItem>

        <PreferenceItem $noBorder>
          <PreferenceInfo>
            <PreferenceLabel>Newsletter</PreferenceLabel>
            <PreferenceDescription>Receba nossa newsletter semanal com novidades</PreferenceDescription>
          </PreferenceInfo>
          <ToggleSwitch $isActive={preferences.newsletter} onClick={() => togglePreference("newsletter")}>
            <ToggleSlider $isActive={preferences.newsletter} />
          </ToggleSwitch>
        </PreferenceItem>
      </ContentContainer>
    </SectionContainer>
  )
}

export default Preferencias
